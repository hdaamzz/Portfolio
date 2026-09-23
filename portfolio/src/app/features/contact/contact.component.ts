import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, SectionHeaderComponent, IconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  private readonly dataService = inject(PortfolioDataService);
  
  readonly personalInfo = this.dataService.personalInfo;
  readonly socialLinks = this.dataService.socialLinks;
}
