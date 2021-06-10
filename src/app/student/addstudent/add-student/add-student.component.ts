import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentServiceService } from '../../services/student-service.service';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  customerForm: FormGroup;
  isSaved: boolean = false;
  isError: boolean = false;
  constructor(private studentService: StudentServiceService) { }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      appFName: new FormControl('', Validators.required),
    });
  }
  async addStudent() {
    console.log(this.customerForm.value);
    this.studentService.createUser(this.customerForm.value).subscribe((res: any) => {
      if (res && res.name) {
        this.isSaved = true;
      } else {
        this.isError = true;
      }
    });
  }

}
