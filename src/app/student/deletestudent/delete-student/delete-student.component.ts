import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../../services/student-service.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {
  isDeleted: boolean = false;
  remainList: any[];
  showComplete: boolean = true;
  studentList: any[];
  constructor(private studentService: StudentServiceService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((res: any) => {
      this.studentList = res;
    });
  }
  deleteStudent(index,formData) {
    this.studentService.deleteStudent(formData.id).subscribe((res: any) => {
      this.studentList.splice(index,1);
      this.isDeleted = true;
    });
  }
}
