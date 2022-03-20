import { Component } from '@angular/core';

interface Cards {
  state: string;
  id: string;
  active: boolean;
  toDo?: Array<object>;
  inProgress?: Array<object>;
  done?: Array<object>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputValue: string = '';
  selectedValue: string = '';

  options = ['Easy', 'Medium', 'Hard'];

  cards = [
    {
      state: 'To-Do',
      id: 'to-do',
      active: false,
      toDo: []
    },
    {
      state: 'In Progress',
      id: 'in-progress',
      active: false,
      inProgress: []
    },
    {
      state: 'Done',
      id: 'done',
      active: false,
      done: []
    }
  ];

  addTask() {
    if (this.inputValue && this.selectedValue) {
      this.cards[0].toDo?.push({
        inputValue: this.inputValue,
        selectedValue: this.selectedValue
      });

      this.cards[0].active = true;
      this.inputValue = '';
    }
  }

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
}
