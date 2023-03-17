import {Category} from './category';

export interface Book {
  id?: number;
  name?: string;
  author?: string;
  startDay?: string;
  category?: Category;
}
