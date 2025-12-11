import { Component, input } from '@angular/core';
import { Project } from '../../../core/models/project.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  project = input.required<Project>();
  isProfessional = input<boolean>(true);

  cardClass = () => this.isProfessional() 
    ? 'bg-[#111111] border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all group'
    : 'bg-[#111111] border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all group';

  titleClass = () => this.isProfessional()
    ? 'text-xl font-bold group-hover:text-cyan-400 transition-colors'
    : 'text-xl font-bold group-hover:text-purple-400 transition-colors';

  iconClass = () => this.isProfessional()
    ? 'text-gray-500 hover:text-cyan-400 transition-colors'
    : 'text-gray-500 hover:text-purple-400 transition-colors';
}
