import {CustomerType} from './customer-type';

export interface Customer {
  id?: number;
  name?: string;
  dateOfBirth?: string;
  gender?: boolean;
  idCard?: string;
  phoneNumber?: string;
  email?: string;
  address?: string;
  customerType?: CustomerType;
}
