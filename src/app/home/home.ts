import { Component } from '@angular/core';
import { Introduction } from "./introduction/introduction";
import { Surveys } from './surveys/surveys';

@Component({
  selector: 'app-home',
  imports: [Introduction, Surveys],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
