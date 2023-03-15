import {Category} from './category';

export interface Song {
  id?: number;
  name?: string;
  singer?: string;
  date?: string;
  category?: Category;
}
