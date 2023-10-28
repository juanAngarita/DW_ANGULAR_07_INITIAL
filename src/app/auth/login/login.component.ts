import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
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
    formUser: User = {
        email: '',
        password: '',
        role: ''
    };

    login(form: any) {
      this.studentService.login(this.formUser.email).subscribe(
        (data) => {
          this.router.navigate(['/student/detail', data.id]);
        }
      )
    }

}
