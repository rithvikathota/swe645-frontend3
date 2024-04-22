import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Student } from '../student';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css'
})
export class CreateStudentComponent implements OnInit{
  // student : Student = new Student();
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
    private router: Router) { }

  ngOnInit(): void {
    
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
    // Convert form data to a Student object
    const studentFormData: Student = {
      ...this.student,
      mostliked: this.student.mostliked
    };

    // Call the service to send data
    this.studentService.createStudent(studentFormData).subscribe(
      response => {
        console.log('Student data sent to the server', response);
      },
      error => {
        console.error('There was an error!', error);
      }
    );
    this.goToStudentList();
  }

  goToStudentList(){
    this.router.navigate(['/']);
  }
  // onSubmit(form: any) {
  //   console.log('Form Data: ', form.value);
  // }
}
