import { Component } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { AboutComponent } from '../sections/about/about.component';
import { AchievementsComponent } from '../sections/achievements/achievements.component';
import { ContactComponent } from '../sections/contact/contact.component';
import { ExperienceComponent } from '../sections/experience/experience.component';
import { HeroComponent } from '../sections/hero/hero.component';
import { NavbarComponent } from '../sections/navbar/navbar.component';
import { ProjectsComponent } from '../sections/projects/projects.component';
import { SkillsComponent } from '../sections/skills/skills.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    AchievementsComponent,
    ContactComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(private readonly seoService: SeoService) {
    this.seoService.setHomeMeta();
  }
}
