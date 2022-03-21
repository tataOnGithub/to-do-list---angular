import { Component } from '@angular/core';

export interface Cards {
  state: string;
  id: string;
  active: boolean;
  toDo?: any;
  inProgress?: any;
  done?: any;
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

  cards: Cards[] = [
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


}
