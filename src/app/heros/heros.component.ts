import { Component } from '@angular/core';
import { hero } from '../hero';
@Component({
  selector: 'app-heros',
  standalone: false,
  
  templateUrl: './heros.component.html',
  styleUrl: './heros.component.css'
})
export class HerosComponent {
 Hero: hero= {
  id :1,
  name :"guna",
  age:24

 }
}
