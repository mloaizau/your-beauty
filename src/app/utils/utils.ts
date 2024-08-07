import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Utils {
  getRandomInt() { return Math.floor(Math.random() * 40); }
}
