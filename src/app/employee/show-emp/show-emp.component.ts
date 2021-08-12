import { Component, OnInit } from '@angular/core';
import{SharedService}from '../../shared.service'


@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {


  constructor(private service:SharedService) { }
  EmployeeList:any=[];




  ngOnInit(): void {
    this.refreshDepList();
  }



  refreshDepList(){

    this.service.getEmpList().subscribe(data=>{

      this.EmployeeList=data;
    })
  }

}
