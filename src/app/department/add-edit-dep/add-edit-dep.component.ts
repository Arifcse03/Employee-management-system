import { Component, Input, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css'],
})
export class AddEditDepComponent implements OnInit {
  DepartmentName: string = '';
  @Input() dep: any;
  constructor(private api: SharedService) {}

  ngOnInit(): void {}
  addDep(value: any) {
    try {
      //  this.DepartmentName=value;
       var val={
         departmentName:value
       };
      if (value) {
        this.api.addDepartment(val).subscribe((res) => {
          alert(res.toString);
        });
      }
      else{
        console.log("input is null")
      }
    } catch (e) {
      console.log('error at add dep function', e);
    }
  }
} //main class
