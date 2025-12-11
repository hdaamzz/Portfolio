import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-skill-category',
  imports: [CommonModule],
  templateUrl: './skill-category.component.html',
  styleUrl: './skill-category.component.css'
})
export class SkillCategoryComponent {
  title = input.required<string>();
  skills = input.required<string[]>();
}
