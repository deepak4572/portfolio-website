import { Component, input } from '@angular/core';

@Component({
  selector: 'app-chip-badge',
  standalone: true,
  templateUrl: './chip-badge.component.html',
  styleUrl: './chip-badge.component.scss'
})
export class ChipBadgeComponent {
  label = input.required<string>();
  active = input<boolean>(false);
}
