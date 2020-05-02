import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public list: string[] = [];
  public input = '';

  constructor() {
  }

  public ngOnInit(): void {
  }

  public onDelete(index): void {
    this.list.splice(index, 1);
  }

  public onEnter(event): void {
    this.input = event.target.value;
    if (this.input) {
      if (event.key === 'Enter') {
        this.list.push(this.input);
        this.input = '';
      }
    }
  }
}
