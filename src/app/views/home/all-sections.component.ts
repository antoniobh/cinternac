import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../../shared/services/landing-fix.service';

@Component({
  selector: 'app-home-one',
  template: `<app-header></app-header>
  <div style="height: 80px; width: 100%"></div>
  <app-portfolio [backgroundGray]="true"></app-portfolio>
  <app-portfolio-carousel></app-portfolio-carousel>
  <app-services [backgroundGray]="true"></app-services>
  <app-services-carousel></app-services-carousel>
  <app-testimonials [backgroundGray]="true"></app-testimonials>
  <app-testimonials-carousel></app-testimonials-carousel>
  <app-cta></app-cta>
  <app-pricings></app-pricings>
  <app-contact [backgroundGray]="true"></app-contact>
  <app-footer></app-footer>`
})
export class AllSectionsComponent implements OnInit, OnDestroy {
  constructor(
    private fix: LandingFixService
  ) { }

  ngOnInit() {
    this.fix.addFix();
  }
  ngOnDestroy() {
    this.fix.removeFix();
  }
  

}