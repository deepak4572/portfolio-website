import { Injectable, signal } from '@angular/core';

const THEME_STORAGE_KEY = 'deepak-portfolio-theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  readonly mode = signal<'light' | 'dark'>('light');

  initTheme(): void {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const nextMode = stored === 'light' || stored === 'dark' ? stored : preferredDark ? 'dark' : 'light';

    this.mode.set(nextMode);
    this.applyTheme(nextMode);
  }

  toggleTheme(): void {
    const nextMode = this.mode() === 'dark' ? 'light' : 'dark';
    this.mode.set(nextMode);
    this.applyTheme(nextMode);
    localStorage.setItem(THEME_STORAGE_KEY, nextMode);
  }

  private applyTheme(mode: 'light' | 'dark'): void {
    document.documentElement.setAttribute('data-theme', mode);
  }
}
