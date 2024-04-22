import { Component, OnInit } from '@angular/core';
import { StudentListComponent } from '../student-list/student-list.component';
import { StudentService } from '../student.service';
import { FormsModule } from '@angular/forms';
import { CreateStudentComponent } from '../create-student/create-student.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  standalone: true,
  imports: [CreateStudentComponent, CommonModule, ReactiveFormsModule, FormsModule, StudentListComponent],
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})

export class UpdateStudentComponent implements OnInit{
  
  id : number;

  student: Student = {
    id: 0,
    firstname: '',
    lastname: '',
    street : '',
    city : '',
    state : '',
    zip : '',
    email : '',
    telephone : '',
    date : new Date() ,
    mostliked:'',
    interest: '',
    likelihood: '',
    comments: ''
  };

  campusFeatures :string[] = ['students', 'location', 'campus', 'atmosphere', 'dormRooms', 'sports'];
  interestSources : string[] = ['friends', 'television', 'internet', 'other'];


  constructor(private studentService: StudentService,
    private route: ActivatedRoute, private router : Router) { this.id = 0 }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe(data => {
      this.student= data;
    },error => console.log(error));
  }

  onCheckboxChange(event: any, feature: string) {
    const currentFeatures = this.student.mostliked.split(',').filter(Boolean); // Split into an array and remove any empty strings
  
    if (event.target.checked) {
      // Add the feature if it's not already present
      if (!currentFeatures.includes(feature)) {
        currentFeatures.push(feature);
      }
    } else {
      // Remove the feature if it exists
      const index = currentFeatures.indexOf(feature);
      if (index > -1) {
        currentFeatures.splice(index, 1); // Remove the feature from the array
      }
    }
  
    // Update the mostliked property to be a comma-separated string
    this.student.mostliked = currentFeatures.join(',');
  }
  
  

  onSubmit() {
    const studentFormData: Student = {
      ...this.student,
      mostliked: this.student.mostliked
    };
    this.studentService.updateStudent(this.id,this.student).subscribe(data =>{
      this.goToStudentList();
    },error=> console.log(error));
    this.goToStudentList();
    // Convert form data to a Student object
   

  }

  goToStudentList(){
    this.router.navigate(['/']);
  }
}
