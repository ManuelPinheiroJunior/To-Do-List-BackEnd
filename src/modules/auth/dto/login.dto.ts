
export class LoginDto {
  /**
   * The e-mail of the user. It must be unique.
   * @example email@email.com
   */
  email: string;
  /**
   * The password of the user. It must have at least 6 characters.
   * @example 123@abc!X
   */
  password: string;
}
