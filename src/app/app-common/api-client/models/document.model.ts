import { DataObject } from './dataobject.model';

export interface Document {
  created: string;
  eTag: string;
  id: number;
  index: number;
  name: string;
  text: string;
  updated: string;
  version: number;
  attachments: DataObject[];
  uploadedFiles: DataObject[];
}
