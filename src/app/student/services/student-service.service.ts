import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  private headers = new Headers({ 'Content-Type': 'application/json'});
  private REST_API_URL = 'http://jsonplaceholder.typicode.com/users/';
  private DELETE_URL = 'https://jsonplaceholder.typicode.com/posts/'; 
  constructor(private http: HttpClient) { }

  createUser(customerForm) {
    return this.http.post(this.REST_API_URL, customerForm).pipe(map((res: any) => {
      return res;
    }));
  }
  getStudents() {
    return this.http.get(this.REST_API_URL).pipe(map((res: any) => {
      return res;
    }))
  }
  updateUser(userData) {
    const UPDATE_REST_API_URL = `${this.REST_API_URL}/${userData.id}`;
    return this.http.put(UPDATE_REST_API_URL, userData)
      .pipe(map((res: any) => {

        return res;
      }));
  }
  deleteStudent(userData){
     const DELETE_REST_API_URL = this.DELETE_URL+ userData;
     return this.http.delete(DELETE_REST_API_URL);
    
  }
}
