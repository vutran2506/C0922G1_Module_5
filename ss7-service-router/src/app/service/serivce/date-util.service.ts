import { Injectable } from '@angular/core';
import {addMonths, addYears, differenceInDays, differenceInMonths, differenceInYears} from 'date-fns';
@Injectable({
  providedIn: 'root'
})
export class DateUtilService {


  constructor() { }
  getDiffToNow(diff: string | number | Date): string {

    const result: string[] = [];
    const now = new Date();
    diff = new Date(diff);
    console.log(diff)

    const years = differenceInYears(now, diff);
    if (years > 0) {
      result.push(`${years} years`);
      diff = addYears(diff, years);
    }

    console.log(now)
    const months = differenceInMonths(now, diff);
    result.push(`${months} months`);
    if (months > 0) {
      diff = addMonths(diff, months);
    }

    const days = differenceInDays(now, diff);
    if (days > 0) {
      result.push(`${days} days`);
    }
    console.log(result)
    return result.join(' ');
  }
}
