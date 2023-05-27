import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  template: `
    <h3>Listado de Heroes</h3>

    <div *ngIf="deletedHero; else nothingWasDeleted">
      <h3>
        Héroe borrado <small class="text-danger"> {{ deletedHero }} </small>
      </h3>
    </div>

    <ng-template #nothingWasDeleted>
      <h3>No se ha borrado nada</h3>
    </ng-template>

    <button class="btn btn-outline-danger" (click)="removeLastHero()" *ngIf="heroNames.length > 0">
      Borrar último héroe
    </button>

    <ul class="mt-2 list-group" *ngFor="let name of heroNames">
      <li class="list-group-item">
        {{ name }}
      </li>
    </ul>
  `,
})
export class ListComponent {
  public heroNames: string[] = [
    'Spiderman',
    'Starlord',
    'Dr. Strange',
    'Ironman',
    'Deadpool',
  ];
  public deletedHero: string | undefined = '';

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
