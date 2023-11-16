import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss' 
})
export class HomeComponent {
  public name = 'Huy Nguyễn';
 public age = 20;
  constructor(){}
  public RefreshName(): void {
    console.log('refreshName');
    this.name = '';
  }
}
