import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ExperienceCardComponent } from './experience-card/experience-card.component';

@Component({
  selector: 'app-experience',
  imports: [CommonModule, SectionHeaderComponent, ExperienceCardComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  private readonly dataService = inject(PortfolioDataService);

  readonly experience = this.dataService.experience;
}
