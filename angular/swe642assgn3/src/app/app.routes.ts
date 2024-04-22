import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path : 'home', component: AppComponent },
    {path : 'students', component: StudentListComponent},
    {path : 'create-student', component: CreateStudentComponent },
    {path : 'update-student/:id', component: UpdateStudentComponent},
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
