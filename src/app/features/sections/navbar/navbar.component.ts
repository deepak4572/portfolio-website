import { Component, signal, inject } from '@angular/core';
import { NAV_ITEMS } from '../../../core/data/portfolio.data';
import { ThemeService } from '../../../core/services/theme.service';
import { ResumeService } from '../../../core/services/resume.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  readonly navItems = NAV_ITEMS;
  readonly menuOpen = signal(false);
  private readonly resumeService = inject(ResumeService);

  constructor(readonly themeService: ThemeService) {}

  scrollTo(sectionId: string): void {
    this.menuOpen.set(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  toggleMenu(): void {
    this.menuOpen.update((current) => !current);
  }

  downloadResume(): void {
    this.resumeService.downloadResume();
  }
}
