/**
 * Created by jtrumpower on 7/10/17.
 */
import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "./hero";
import {ActivatedRoute, ParamMap} from "@angular/router";
import { Location } from '@angular/common';
import {HeroService} from "./hero.service";
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-ero-detail',
  templateUrl: '../../html/hero-detail.component.html',
  styleUrls: ['../../css/hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }
}
