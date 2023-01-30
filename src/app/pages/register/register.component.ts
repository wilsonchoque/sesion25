import { FarmaciaService } from './../../services/farmacia.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister!: FormGroup;


  constructor(private farmaciaService: FarmaciaService){
    this.formRegister = new FormGroup({
      producto: new FormControl(),
      costo: new FormControl(),
      foto: new FormControl(),

    })
  }

  ngOnInit(): void {
    
  }
  onSubmit(){
    console.log(this.formRegister.value);
    const response = this.farmaciaService.addProducto(this.formRegister.value)
    console.log(response)
  }



}
