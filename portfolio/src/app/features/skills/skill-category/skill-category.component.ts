import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { CornerFrameComponent } from '../../../shared/components/corner-frame/corner-frame.component';

@Component({
  selector: 'app-skill-category',
  imports: [CommonModule, CornerFrameComponent],
  templateUrl: './skill-category.component.html',
  styleUrl: './skill-category.component.css'
})
export class SkillCategoryComponent {
  title = input.required<string>();
  skills = input.required<string[]>();
}
