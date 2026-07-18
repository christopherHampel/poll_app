import { Component } from '@angular/core';
import { Introduction } from "./introduction/introduction";

@Component({
  selector: 'app-home',
  imports: [Introduction],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
