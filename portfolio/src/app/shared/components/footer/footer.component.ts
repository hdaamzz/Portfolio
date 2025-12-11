import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../../core/services/portfolio-data.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  private readonly dataService = inject(PortfolioDataService);
  
  readonly personalInfo = this.dataService.personalInfo;
  readonly currentYear = new Date().getFullYear();
}
