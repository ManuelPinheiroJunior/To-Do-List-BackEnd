
export class CreateUserDto {
   /**
   * The name of the user. It can be the full name or just the first name.
    * @example John Doe
   */
  firstName: string;
    /**
     * The last name of the user.
     * @example Doe
     */
  lastName: string;
  /**
   * The date of birth of the user.
   * @example 1990-01-01
   */
  dateOfBirth: string;
  /**
   * The e-mail of the user. It must be unique.
   * @example email@email.com
   */
  email: string;
  /**
   * The password of the user. It must have at least 6 characters.
   * @example 123@abc!X
   */
  password?: string;
}
