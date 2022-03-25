import { Component, Input, OnInit } from '@angular/core';
import { Cards } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cards: Cards[];
  @Input() card: Cards;
  @Input() inputValue: string = '';
  @Input() selectedValue: string = '';

  constructor() { }

  toProgress(i) {
    let pushItem = this.cards[0].toDo[i];
    this.cards[1].inProgress?.push(pushItem);
    this.cards[0].toDo.splice(i, 1);

    this.cards[1].active = true;

    if (this.cards[0].toDo?.length == 0) {
      this.cards[0].active = false;
    }
  }

  delete(i) {
    this.cards[0].toDo.splice(i, 1);

    if (this.cards[0].toDo?.length == 0) {
      this.cards[0].active = false;
    }
  }

  toDone(i) {
    let pushItem = this.cards[1].inProgress[i];
    this.cards[2].done?.push(pushItem);
    this.cards[1].inProgress.splice(i, 1);

    this.cards[2].active = true;

    if (this.cards[1].inProgress?.length == 0) {
      this.cards[1].active = false;
    }
  }

  toToDo(i) {
    let pushItem = this.cards[1].inProgress[i];
    this.cards[0].toDo?.push(pushItem);
    this.cards[1].inProgress.splice(i, 1);

    if (this.cards[1].inProgress?.length == 0) {
      this.cards[1].active = false;
    }
    if (this.cards[0].toDo?.length != 0) {
      this.cards[0].active = true;
    }
  }

  toBackInProgress(i) {
    let pushItem = this.cards[2].done[i];
    this.cards[1].inProgress?.push(pushItem);
    this.cards[2].done.splice(i, 1);

    if (this.cards[2].done?.length == 0) {
      this.cards[2].active = false;
    }
    if (this.cards[1].inProgress?.length != 0) {
      this.cards[1].active = true;
    }
  }

  ngOnInit(): void {
  }

}
