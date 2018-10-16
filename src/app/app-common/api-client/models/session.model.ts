
export interface Session {
  apiKey: string;
  authorities: string[];
  expires: string;
  id: number;
  remoteAddress: string;
  secret: string;
}
