import { Component } from '@angular/core';
import { CommonService } from '../Services/common.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  public counter = 0;
  public counterBinhPhuong = 0;
  public newCounter  = 0;
  constructor(private common : CommonService){
  }
  ngOnInit(): void {
    this.counter = this.common.getCounter();
    console.log('Counter: '+this.counter);
    this.counterBinhPhuong = this.common.binhPhuong(this.counter);
    console.log('Counter: '+ this.counterBinhPhuong);
    this.newCounter = this.counter + 1;
    this.common.setCounter(this.newCounter);
  }

}
