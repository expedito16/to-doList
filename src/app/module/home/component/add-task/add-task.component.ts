import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() emiterTaskItem = new EventEmitter();

  addTaskItem: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  submitTaskItem () {
    this.addTaskItem = this.addTaskItem.trim();

    if (this. addTaskItem) {
      this.emiterTaskItem.emit(this.addTaskItem);
      this.addTaskItem = "";
    }
  }
}
