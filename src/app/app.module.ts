import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddStudentComponent } from './student/addstudent/add-student/add-student.component';
import { DeleteStudentComponent } from './student/deletestudent/delete-student/delete-student.component';
import { StudentDetailsComponent } from './student/studentDetils/student-details/student-details.component';
import { UpdateDetailsComponent } from './student/updateDetils/update-details/update-details.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchpipePipe } from './student/studentDetils/searchpipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AddStudentComponent,
    DeleteStudentComponent,
    StudentDetailsComponent,
    UpdateDetailsComponent,
    MenuComponent,
    SearchpipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
