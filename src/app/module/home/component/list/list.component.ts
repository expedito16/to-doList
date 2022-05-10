import { Component, DoCheck } from '@angular/core';
import { TaskItem } from '../../model/task-item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements DoCheck {
  taskList: Array<TaskItem> = JSON.parse(localStorage.getItem("list") || "[]");

  constructor() { }

  ngDoCheck () {
    this.setLocalStorage();
  }

  setTaskItem ($event: string) {
    this.taskList.push({ task: $event, checked: false });
  }

  deleteTaskItem ($event: any) {
    this.taskList.splice($event, 1);
  }

  deleteTaskAll () {
    if (this.taskList.length) {
      const confirm = window.confirm("Deseja excluir toda a lista de atividades ?")

      if (confirm) {
        this.taskList = [];
      }
    }
  }

  setLocalStorage () {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }
}
