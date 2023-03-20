export interface UserAuthenticatedModel {
  token: string;
  name: string;
  authorities: string[];
}
