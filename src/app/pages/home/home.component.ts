import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    private router:Router
  ){}

  linkedin() {
    window.open('https://www.linkedin.com/in/lucas-baggio-125ab2209/', '_blank');
  }
  
  github() {
    window.open('https://github.com/GokuDBZSSJ7', '_blank');
  }
  
}
