import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-card',
  standalone: true,
  templateUrl: './section-card.component.html',
  styleUrl: './section-card.component.scss'
})
export class SectionCardComponent {
  title = input.required<string>();
  subtitle = input<string>('');
  icon = input<string>('');
}
