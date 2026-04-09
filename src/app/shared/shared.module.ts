import { NgModule } from '@angular/core';
import { ChipBadgeComponent } from './components/chip-badge/chip-badge.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SectionCardComponent } from './components/section-card/section-card.component';

@NgModule({
  imports: [SectionCardComponent, ChipBadgeComponent, LoaderComponent],
  exports: [SectionCardComponent, ChipBadgeComponent, LoaderComponent]
})
export class SharedModule {}
