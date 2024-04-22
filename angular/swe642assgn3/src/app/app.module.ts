import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { UpdateStudentComponent } from "./update-student/update-student.component";
import { StudentListComponent } from "./student-list/student-list.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app.routes";
import { CreateStudentComponent } from "./create-student/create-student.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent, 
        StudentListComponent,
        CreateStudentComponent,
        UpdateStudentComponent
    ],
    exports: [ StudentListComponent, HttpClientModule, CreateStudentComponent, UpdateStudentComponent, RouterModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
    imports: [
        FormsModule,
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        RouterModule,
        ReactiveFormsModule
    ],
    
    providers:[],
    bootstrap: [AppComponent]
})

export class AppModule{}
