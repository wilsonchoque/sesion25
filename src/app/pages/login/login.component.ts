import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(private userService: UsuarioService, private router: Router){
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }


  ngOnInit(): void {
    
  }

  onSubmit(){
    this.userService.login(this.formLogin.value)
    .then(
      response => {
        console.log(response)
        this.router.navigate(['/list'])
      })
    .catch( error => console.log(error));
  }
}
