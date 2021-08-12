import { Component, OnInit } from '@angular/core';
import{SharedService} from '../../shared.service'
import{DepartmentDialogComponent} from '../../department-dialog/department-dialog/department-dialog.component';
import{MatDialog, MatDialogClose}from '@angular/material/dialog'
import{AddEditDepComponent} from '../add-edit-dep/add-edit-dep.component'
@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService ,private dialog:MatDialog) { }
  DepartmentList:any=[];



  ngOnInit(): void {
    this.refreshDepList();
  }
  refreshDepList(){

    this.service.getDepList().subscribe(data=>{

      this.DepartmentList=data;
    })
  }

  addClick(){
this.dialog.open(AddEditDepComponent);

  }

}
