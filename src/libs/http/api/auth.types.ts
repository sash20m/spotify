export interface AccessToken {
  access_token: string;
  expires_in: number;
  scope: string | string[];
  token_type: string;
}
