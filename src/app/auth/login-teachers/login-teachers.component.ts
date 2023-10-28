import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { StudentService } from 'src/app/services/student.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-login-teachers',
  templateUrl: './login-teachers.component.html',
  styleUrls: ['./login-teachers.component.css']
})
export class LoginTeachersComponent {

  constructor(private teacherService: TeacherService,
    private router: Router) {}
  
    //modelo
    formUser: User = {
      email: '',
      password: '',
      role: ''
  };

  login(form: any) {
    this.teacherService.login(this.formUser).subscribe(
      (data) => {
        this.router.navigate(['/home']);
      }
    )
  }
}
