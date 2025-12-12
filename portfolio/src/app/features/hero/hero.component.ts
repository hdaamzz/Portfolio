import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  private readonly dataService = inject(PortfolioDataService);
  
  readonly personalInfo = this.dataService.personalInfo;
  readonly socialLinks = this.dataService.socialLinks;

  downloadResume(): void {
    const link = document.createElement('a');
    link.href = '/Hamzathul_Dilshad_Resume.pdf';
    link.download = 'Hamzathul_Dilshad_Resume.pdf';
    link.click();
  }
}
