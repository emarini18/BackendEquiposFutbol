import { Component, OnInit } from '@angular/core';
import { EstadioService } from '../../services/estadios.service';

@Component({
  selector: 'app-estadios',
  templateUrl: './estadios.component.html',
  styleUrls: ['./estadios.component.css']
})
export class EstadiosComponent implements OnInit {

  // Arreglo con la lista de estadios
  estadios: any = [];
  constructor(private estadioService: EstadioService) { }

  ngOnInit(): void {
    this.getAllEstadios();
  }

  //async
  getAllEstadios() {
    this.estadioService.getAllEstadios()
      .subscribe(data => {
        this.estadios = data
        console.log(data);
      });

  }

}
