import { Component } from '@angular/core';
import { hero } from '../hero';
import  {HEROES}  from '../hero-mock';
import { FormsModule } from '@angular/forms';
import {
  NgIf,
  NgFor,
  UpperCasePipe,
} from '@angular/common';

@Component({
  selector: 'app-heros',
  standalone: false,
  // imports :[ FormsModule,
  //   NgIf,
  //   NgFor,
  //   UpperCasePipe,],
  templateUrl: './heros.component.html',
  styleUrl: './heros.component.css'
})
export class HerosComponent {

  heroes = HEROES;
 selectedHero?: hero;

  onSelect(hero: hero): void {
    this.selectedHero = hero;
}}
