import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { scrollToSection } from '../../utils/scroll.utils';
import { IconComponent } from '../icon/icon.component';


interface NavItem {
  id: string;
  label: string;
}
@Component({
  selector: 'app-navbar',
  imports: [CommonModule, IconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  readonly isMobileMenuOpen = signal(false);

  readonly navItems: NavItem[] = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

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
