import {
  Injectable,
  UnauthorizedException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../interface/user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async login(loginDto) {
    const user = await this.userModel.findOne({ email: loginDto.email });
    if (!user) {
      return new UnauthorizedException('User does not exists');
    }

    if (await bcrypt.compare(loginDto.password, user.password)) {
      delete user.password;
      const token = this.generateToken({
        id: user._id,
        email: user.email,
        name: user.name,
      });
      return {
        user: user,
        token: token,
      };
    } else {
      return new UnauthorizedException('Password not matched');
    }
  }

  async signup(userDto) {
    const existingUser = await this.userModel.findOne({ email: userDto.email });

    if (existingUser) {
      throw new HttpException('Email already in used', HttpStatus.BAD_REQUEST);
    }
    if (userDto.password) {
      const saltRounds = 10;
      userDto.password = await bcrypt.hash(userDto.password, saltRounds);
    }

    const user = new this.userModel(userDto);
    return await user.save();
  }

  private generateToken(payload) {
    return {
      access_token: `${this.jwtService.sign(payload)}`,
    };
  }
}
