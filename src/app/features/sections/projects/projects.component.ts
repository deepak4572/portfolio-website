import { Component } from '@angular/core';
import { PROJECT_ITEMS } from '../../../core/data/portfolio.data';
import { ChipBadgeComponent } from '../../../shared/components/chip-badge/chip-badge.component';
import { SectionCardComponent } from '../../../shared/components/section-card/section-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionCardComponent, ChipBadgeComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  readonly projects = PROJECT_ITEMS;
  selectedFilter = 'All';

  get filters(): string[] {
    const stack = new Set<string>();
    this.projects.forEach((project) => project.techStack.forEach((tech) => stack.add(tech)));
    return ['All', ...Array.from(stack).sort((a, b) => a.localeCompare(b))];
  }

  get filteredProjects() {
    if (this.selectedFilter === 'All') {
      return this.projects;
    }

    return this.projects.filter((project) => project.techStack.includes(this.selectedFilter));
  }

  setFilter(filter: string): void {
    this.selectedFilter = filter;
  }
}
