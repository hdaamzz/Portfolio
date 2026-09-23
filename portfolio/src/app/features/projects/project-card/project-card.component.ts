import { Component, input } from '@angular/core';
import { Project } from '../../../core/models/project.interface';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../shared/components/icon/icon.component';
import { CornerFrameComponent } from '../../../shared/components/corner-frame/corner-frame.component';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule, IconComponent, CornerFrameComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  project = input.required<Project>();
  isProfessional = input<boolean>(true);

  cardClass = () => 'relative bg-surface backdrop-blur-sm border border-line rounded-2xl p-6 hover:border-white/30 transition-all group';

  titleClass = () => 'text-lg font-bold text-ink-900 uppercase tracking-wide group-hover:text-accent-500 transition-colors';

  iconClass = () => 'text-ink-400 hover:text-white transition-colors';
}
