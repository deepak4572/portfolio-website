import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private readonly title: Title,
    private readonly meta: Meta
  ) {}

  setHomeMeta(): void {
    this.title.setTitle('Deepak Chauhan | Software Engineer Portfolio');
    this.meta.updateTag({
      name: 'description',
      content:
        'Portfolio of Deepak Chauhan, Software Engineer focused on Spring Boot, Angular, scalable systems, and microservices.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Deepak Chauhan, Software Engineer, Spring Boot, Angular, Microservices, Backend Developer, Portfolio'
    });
    this.meta.updateTag({ property: 'og:title', content: 'Deepak Chauhan | Software Engineer Portfolio' });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Discover Deepak Chauhan\'s work in backend engineering, distributed systems, and modern Angular development.'
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
  }
}
