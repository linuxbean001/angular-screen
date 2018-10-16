import { Document } from './document.model';

export interface DocumentGroup {
  created: string;
  eTag: string;
  id: number;
  index: number;
  name: string;
  text: string;
  updated: string;
  version: number;
  documents: Document[];
}
