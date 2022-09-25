import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { ToDoService } from '../services/todoservices.service';
import { toggleAll } from '../todo.actions';
import * as actions from '../todo.actions';
@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

  completed = false;
  currentFilter: string = 'all';

  constructor(private store: Store<AppState>, private toDoServices: ToDoService) {

    this.toDoServices.getAllToDoes().subscribe((resp: any) => {
      console.log(resp)
      resp.toDoes.map((toDo: any) => {
        this.store.dispatch(actions.create({ text: toDo.description }));
      });
    });
  }

  ngOnInit(): void {
    this.store.select('filter').subscribe(filter => this.currentFilter = filter);
  }

  toggleAll() {
    this.completed = !this.completed;
    this.store.dispatch(toggleAll({ completed: this.completed }));
  }
}
