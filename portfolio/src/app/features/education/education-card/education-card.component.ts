import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Education } from '../../../core/models/education.interface';

@Component({
  selector: 'app-education-card',
  imports: [CommonModule],
  templateUrl: './education-card.component.html',
  styleUrl: './education-card.component.css'
})
export class EducationCardComponent {
  education = input.required<Education>();
  isCurrent = input<boolean>(false);
}
