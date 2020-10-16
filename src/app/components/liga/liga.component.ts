import { Component, OnInit } from '@angular/core';
import { LigaService } from 'src/app/services/liga.service';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.css']
})
export class LigaComponent implements OnInit {

   // Arreglo con la lista de estadios
   ligas: any = [];
   constructor(private ligaService: LigaService) { }
 
   ngOnInit(): void {
     this.getAllLiga();
   }

   getAllLiga() {
    this.ligaService.getAllLiga()
      .subscribe(data => {
        this.ligas = data
        console.log(data);
      });
  }

}
