import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-btn',
  imports: [],
  templateUrl: './primary-btn.html',
  styleUrl: './primary-btn.scss',
})
export class PrimaryBtn {
  @Input() hoverImage?: string;
}
