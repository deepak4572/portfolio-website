import { Component } from '@angular/core';
import { EXPERIENCE_ITEMS } from '../../../core/data/portfolio.data';
import { SectionCardComponent } from '../../../shared/components/section-card/section-card.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionCardComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  readonly experiences = EXPERIENCE_ITEMS;
}
