import { Component,OnInit } from '@angular/core';
import { Student } from '../student';
import { CommonModule } from '@angular/common';
import { StudentService } from '../student.service';
import { HttpClientModule } from '@angular/common/http';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];
  constructor(private studentService : StudentService,
    private router : Router
  ){}
  ngOnInit(): void {
this.getStudents();

  //   this.students = [{
  //     "id": 1,
  //   "firstname": "keerthana",
  //   "lastname": "kondoju",
  //   "street" : "3891 fairfax sq",
  //   "city": "Fairfax",
  //   "state": "VA",
  //   "zip": "22031",
  //   "email": "kkondoju@gmu.edu",
  //   "telephone": "7799300594",
  //   "date": "2022-01-01",
  //   "mostliked": "campus",
  //   "likelihood": "likely",
  //   "comments": "very good tour",
  //   "interest" : "friends"
  //   },
  //   {
  //     "id": 1,
  //     "firstname": "nayani",
  //     "lastname": "reddy",
  //     "street" : "3892 fairfax sq",
  //     "city": "Fairfax",
  //     "state": "VA",
  //     "zip": "22031",
  //     "email": "nreddyre@gmu.edu",
  //     "telephone": "3587657465",
  //     "date": "2022-01-01",
  //     "mostliked": "location",
  //     "likelihood": "very likely",
  //     "comments": "very good college",
  //     "interest" : "friends"
  //   }
  // ];

  }

  private getStudents(){
    this.studentService.getStudentsList().subscribe(data => {
      this.students = data;
    })
  }

  updateStudent(id : number){
    this.router.navigate(['update-student',id]);
  }
  
  deleteStudent(id: number){
    this.studentService.deleteStudent(id).subscribe( data =>{
      console.log(data);
      this.getStudents();
    })
  }
}
