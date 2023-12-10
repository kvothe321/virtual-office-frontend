import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-office',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './office.component.html',
  styleUrl: './office.component.css',
})
export class OfficeComponent {
  desks = Array.from({length: 6}).map((_, index) => index + 1);

  constructor() {
  }
}
