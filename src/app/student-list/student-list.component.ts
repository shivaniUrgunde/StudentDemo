import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
@Input ()msg:string='';
@Output() passValue=new EventEmitter<string>();
  studentList : IStudent[]=[
{sid:1,name:"shiv", marks:100},
{sid:2,name:"dhanno", marks:89},
  ]; 
  sendMessage(){
    this.passValue.emit("hi,from Child");
  }
}

export interface IStudent{
  sid: number;
  name: string;
  marks:number;
}
