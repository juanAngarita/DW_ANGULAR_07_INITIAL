import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private studentService: StudentService,
    private router: Router) {}

    //modelo
    formUser: Student = {
      correo: '',
      id: 0,
      nombre: '',
      carrera: '',
      semestre: 0
    };

    login(form: any) {
      this.studentService.login(this.formUser.correo).subscribe(
        (data) => {
          this.router.navigate(['/student/detail', data.id]);
        }
      )
    }

}
