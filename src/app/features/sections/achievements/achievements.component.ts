import { Component } from '@angular/core';
import { CODING_PROFILES } from '../../../core/data/portfolio.data';

@Component({
  selector: 'app-achievements',
  standalone: true,
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss'
})
export class AchievementsComponent {
  readonly profiles = CODING_PROFILES;
}
