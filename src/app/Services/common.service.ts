import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public counter = 0;
  constructor() { }
  public binhPhuong(n : number):number{
    console.log('Chạy qua hàm bình phương:'+ n);
    return n * n;
  }
  public getCounter(): number {
    return this.counter;
  }

  public setCounter(n: number): void {
    this.counter = n;
  }
}
