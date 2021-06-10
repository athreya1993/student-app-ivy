import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../../services/student-service.service';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {
  formData: boolean = true;
  isUpdated
  studentList: any[];
  showUpdateModal: boolean = false;
  duplicateUserData: any = [];
  showContainer: boolean = true;
  constructor(private studentService: StudentServiceService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((res: any) => {
      this.studentList = res;
      console.log(res);
    });
  }
  modalOpen(userData) {
    this.duplicateUserData.push({ 'name': userData.name, 'phone': userData.phone,'email':userData.email,'appFName':userData.username,'address': userData.address.city,'id':userData.id});
    this.formData=this.duplicateUserData[0];
    console.log(this.duplicateUserData);
    this.showContainer = false;
    this.showUpdateModal = true;
  }
  updateBtnHandler() {
    this.studentService.updateUser(this.formData)
      .subscribe((res: any) => {
        console.log(res);
        if (res && res.id) {
          this.isUpdated = true;
        }
      });
  }
}
