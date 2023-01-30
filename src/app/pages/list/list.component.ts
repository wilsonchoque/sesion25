import { Farmacia } from './../../interfaces/interface';
import { Component, OnInit } from '@angular/core';
import { FarmaciaService } from 'src/app/services/farmacia.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  farmacia!: Farmacia[];

  constructor(private farmaciaServices: FarmaciaService){}

  ngOnInit(): void {
    this.farmaciaServices.getFarmacia().subscribe(Farmacia => {
      this.farmacia = Farmacia
    })
  }


  onClickDelete(farmacia : Farmacia){
    const response = this.farmaciaServices.deletedFarmacia(farmacia)
    console.log(response)
  }



}
