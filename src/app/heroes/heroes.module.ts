import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";
import { HeroesComponent } from "./components/heroes/heroes.component";


@NgModule({
  declarations: [
    HeroComponent,
    ListComponent,
    HeroesComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeroComponent,
    ListComponent,
    HeroesComponent,
  ]
})
export class HeroesModule {

}
