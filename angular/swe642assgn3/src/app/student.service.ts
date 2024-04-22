import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseURL="http://localhost:8081/api/v1/student";

  constructor(private httpClient: HttpClient) { }

  getStudentsList(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseURL}`);
  }

  createStudent(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(this.baseURL, student);
  }

  getStudentById(id: number): Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseURL}/${id}`);

  }

  updateStudent(id: number, student: Student): Observable<Student> {
    return this.httpClient.put<Student>(`${this.baseURL}/${id}`, student);
}

deleteStudent(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}

}
