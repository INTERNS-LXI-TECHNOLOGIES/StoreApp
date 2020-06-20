/* tslint:disable */
export interface UserDTO {
  id?: number;
  activated?: boolean;
  createdBy?: string;
  createdDate?: string;
  email?: string;
  firstName?: string;
  authorities?: Array<string>;
  imageUrl?: string;
  langKey?: string;
  lastModifiedBy?: string;
  lastModifiedDate?: string;
  lastName?: string;
  login?: string;
}
