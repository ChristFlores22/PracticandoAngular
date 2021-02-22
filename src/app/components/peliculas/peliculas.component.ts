import { Component, OnInit, DoCheck,OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  public titulo: string;
  public peliculas !: Pelicula[];
  constructor() { 
    this.titulo = "Componente peliculas";
    console.log("CONSTRUCTOR LANZADO");
    //ASIGNAR VALORES A LAS PROPIEDADES DE LA CLASE
    this.peliculas = [
      new Pelicula ("Spiderman 4",2018,"https://as.com/meristation/imagenes/2019/09/27/noticias/1569603388_605931_1569603425_noticia_normal.jpg"),
      new Pelicula ("Los vengadores Endgame",2019,"https://as.com/tikitakas/imagenes/2019/04/06/portada/1554566621_000164_1554566834_noticia_normal.jpg"),
      new Pelicula ("Batman vs Superman",2020,"https://i1.wp.com/www.vinilonegro.com/wp-content/uploads/2016/03/Batman-v-Superman-3-e1459165974655.jpg?fit=600%2C400&ssl=1")
    ]
  }

  ngOnInit(): void {
    console.log("Componente Iniciado");
  }

  ngDoCheck(){
    console.log("DOCCHECK LANZADO");
  }

  cambiarTitulo(){
    this.titulo = "El titulo ha sido cambiado";
  }

  ngOnDestroy(){
    console.log("EL COMPONENTE SE VA A ELIMINAR");
  }

}
