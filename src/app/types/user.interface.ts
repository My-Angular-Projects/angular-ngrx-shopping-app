export interface IUser {
  email: string;
  id: string;
  readonly _token: string;
  readonly _tokenExpirationDate: Date;
  get token(): string | null;
}
