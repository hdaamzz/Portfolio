import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  private readonly dataService = inject(PortfolioDataService);
  
  readonly personalInfo = this.dataService.personalInfo;
  readonly socialLinks = this.dataService.socialLinks;
}
