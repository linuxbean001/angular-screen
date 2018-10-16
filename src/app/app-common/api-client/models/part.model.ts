import { InputStream } from './inputstream.model';

export interface Part {
  contentType: string;
  headerNames: string[];
  name: string;
  size: number;
  submittedFileName: string;
  inputStream: InputStream;
}
