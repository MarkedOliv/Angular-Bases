import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  template: `
    <h1>{{ name }}</h1>

    <dl>
      <td>Nombre:</td>
      <dd>{{ name }}</dd>

      <td>Edad:</td>
      <dd>{{ age }}</dd>

      <td>Método:</td>
      <dd>{{ getHeroDescription() }}</dd>

      <td>Capitalizado:</td>
      <dd>{{ capitalizedName }}</dd>
    </dl>

    <button class="btn btn-primary mx-2" *ngIf="showChangeName" (click)="changeHero()">Cambiar Nombre</button>

    <button class="btn btn-primary mx-2" *ngIf="showChangeAge" (click)="changeHeroAge()">Cambiar Edad</button>
    <button class="btn btn-primary mx-2"  (click)="resetForm()">Reset</button>
  `,
  styles: [
    `
      h1 {
        font-size: 50px;
      }

      dd {
        font-size: 2rem;
        font-weight: bold;
      }
    `,
  ],
})
export class HeroComponent {
  public name: string = 'ironman';
  public showChangeName: boolean = true;
  public age: number = 45;
  public showChangeAge: boolean = true;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void {
    this.showChangeName = false;
    this.name = 'spiderman';
  }

  changeHeroAge():void {
    this.showChangeAge = false;
    this.age = 25;
  }
  resetForm():void {
    this.showChangeName = true;
    this.age = 45;
    this.showChangeAge = true;
    this.name = 'ironman';
  }
}
