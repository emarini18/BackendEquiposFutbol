import { Component, OnInit } from '@angular/core';
import { EquipoService } from 'src/app/services/equipos.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  // Arreglo con la lista de equipos
  equipos: any = [];
  constructor(private equipoService: EquipoService) { }

  ngOnInit(): void {
    this.getAllEquipos();
  }

  getAllEquipos() {
    this.equipoService.getAllEquipos()
      .subscribe(data => {
        this.equipos = data
        console.log(data);
      });
  }

}