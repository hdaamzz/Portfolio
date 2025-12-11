import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { ProjectCardComponent } from './project-card/project-card.component';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  private readonly dataService = inject(PortfolioDataService);
  
  readonly professionalProjects = this.dataService.professionalProjects;
  readonly otherProjects = this.dataService.otherProjects;
  readonly socialLinks = this.dataService.socialLinks;
}
