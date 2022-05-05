import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { ListComponent } from './component/list/list.component';
import { AddTaskComponent } from './component/add-task/add-task.component';
import { ButtonDeleteAllComponent } from './component/button-delete-all/button-delete-all.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ListComponent,
    AddTaskComponent,
    ButtonDeleteAllComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ListComponent,
    AddTaskComponent,
    ButtonDeleteAllComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule { }
