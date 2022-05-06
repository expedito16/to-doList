import { Component, OnInit } from '@angular/core';
import { TaskItem } from '../../model/task-item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  taskList: Array<TaskItem> = [
    { task: "task de teste1", checked: false },
    { task: "task de teste2", checked: false },
  ];

  constructor() { }

  ngOnInit(): void {
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
}
