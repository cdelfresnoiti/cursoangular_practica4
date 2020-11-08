import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coordenadas',
  templateUrl: './coordenadas.component.html',
  styleUrls: ['./coordenadas.component.css']
})
export class CoordenadasComponent implements OnInit {

  coordenadas: string;
  constructor() { }

  ngOnInit() {
  }

  obtenerCoordenadas(data: MouseEvent) {
    this.coordenadas = `X: ${data.clientX} Y: ${data.clientY}`;
  }

}
