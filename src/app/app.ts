import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/services/theme.service';
import { LoaderComponent } from './shared/components/loader/loader.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  readonly isLoading = signal(true);

  constructor(private readonly themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.initTheme();
    setTimeout(() => this.isLoading.set(false), 1200);
  }
}
