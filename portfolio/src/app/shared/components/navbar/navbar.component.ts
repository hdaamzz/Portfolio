import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { PortfolioDataService } from '../../../core/services/portfolio-data.service';
import { scrollToSection } from '../../utils/scroll.utils';


interface NavItem {
  id: string;
  label: string;
}
@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private readonly dataService = inject(PortfolioDataService);

  readonly isMobileMenuOpen = signal(false);

  readonly navItems: NavItem[] = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  readonly initials = () => {
    // const name = this.dataService.personalInfo().name;
    // return name.split(' ').map(n => n[0]).join('');
    return ""
  };

  scrollTo(sectionId: string): void {
    scrollToSection(sectionId);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(state => !state);
  }

  scrollToAndClose(sectionId: string): void {
    this.scrollTo(sectionId);
    this.isMobileMenuOpen.set(false);
  }
}
