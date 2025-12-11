import { Component, inject } from '@angular/core';
import { EducationCardComponent } from './education-card/education-card.component';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-education',
  imports: [CommonModule, EducationCardComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  private readonly dataService = inject(PortfolioDataService);
  readonly education = this.dataService.education;
}
