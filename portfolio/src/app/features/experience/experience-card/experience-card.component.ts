import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Experience } from '../../../core/models/experience.interface';
import { IconComponent } from '../../../shared/components/icon/icon.component';
import { CornerFrameComponent } from '../../../shared/components/corner-frame/corner-frame.component';

@Component({
  selector: 'app-experience-card',
  imports: [CommonModule, IconComponent, CornerFrameComponent],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.css'
})
export class ExperienceCardComponent {
  experience = input.required<Experience>();
  isLast = input<boolean>(false);
}
