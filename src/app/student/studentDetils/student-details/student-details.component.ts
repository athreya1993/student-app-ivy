import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../../services/student-service.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  name=""
  studentList :any[];
  constructor(private studentService: StudentServiceService) { }

  ngOnInit(): void {
      this.studentService.getStudents().subscribe( (res:any) =>{
        this.studentList=res;
        console.log(res);
      });
    }
}
