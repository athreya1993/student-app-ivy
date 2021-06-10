import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddStudentComponent } from './student/addstudent/add-student/add-student.component';
import { DeleteStudentComponent } from './student/deletestudent/delete-student/delete-student.component';
import { StudentDetailsComponent } from './student/studentDetils/student-details/student-details.component';
import { UpdateDetailsComponent } from './student/updateDetils/update-details/update-details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:AddStudentComponent},
  {path:'delete',component:DeleteStudentComponent},
  {path:'update',component:UpdateDetailsComponent},
  {path:'details',component:StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
