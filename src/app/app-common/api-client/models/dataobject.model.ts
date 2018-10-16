import { User } from './user.model';

export interface DataObject {
  contentType: string;
  created: string;
  eTag: string;
  filename: string;
  id: number;
  length: number;
  location: string;
  md5: string;
  open: boolean;
  readable: boolean;
  updated: string;
  version: number;
  author: User;
}
