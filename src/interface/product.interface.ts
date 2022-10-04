import { Document } from 'mongoose';

export interface Product extends Document {
  id: string;
  name: string;
  isPaid: boolean;
  seats: number;
  status: string;
  price: number;
  deletedCheck: boolean;
}
