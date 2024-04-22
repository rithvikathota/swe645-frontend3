import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateStudentComponent } from './update-student/update-student.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentListComponent, UpdateStudentComponent, HttpClientModule, CreateStudentComponent, FormsModule],
  providers:[HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'swe642assgn3';

  constructor(private router: Router){}

  navigateToCreateStudent(){
    this.router.navigate(['/create-student']);
  }

  navigateToStudentList(){
    this.router.navigate(['/students']);
  }
}
