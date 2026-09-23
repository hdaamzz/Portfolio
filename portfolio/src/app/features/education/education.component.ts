import { Component, inject } from '@angular/core';
import { EducationCardComponent } from './education-card/education-card.component';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-education',
  imports: [CommonModule, EducationCardComponent, SectionHeaderComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  private readonly dataService = inject(PortfolioDataService);
  readonly education = this.dataService.education;
}
