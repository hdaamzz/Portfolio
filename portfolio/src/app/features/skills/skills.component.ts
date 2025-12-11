import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SkillCategoryComponent } from './skill-category/skill-category.component';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, SkillCategoryComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  private readonly dataService = inject(PortfolioDataService);
  readonly skills = this.dataService.skills;
}
