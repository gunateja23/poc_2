import { Component } from '@angular/core';
import { hero } from '../hero';
@Component({
  selector: 'app-heros',
  standalone: false,
  
  templateUrl: './heros.component.html',
  styleUrl: './heros.component.css'
})
export class HerosComponent {
 hero: hero= {
  id :1,
  name :"guna",
  age:24,
  salary:40000,
  company:"Accenture",
  address:"vijayawada"

 }
 
}
