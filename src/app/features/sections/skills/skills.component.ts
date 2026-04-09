import { Component } from '@angular/core';
import { SKILL_CATEGORIES } from '../../../core/data/portfolio.data';
import { ChipBadgeComponent } from '../../../shared/components/chip-badge/chip-badge.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ChipBadgeComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  readonly skills = SKILL_CATEGORIES;
}
