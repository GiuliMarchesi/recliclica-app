import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
  standalone: false,
})
export class LoaderPage implements OnInit {

  //navego a la pagina de login cuando se carga la pagina
  //si agrego setTimeout ahora me da un error el test, porque es una funcion asincrona, pero test no esta esperando ninguna funcion asincrona
  //se esta ejecutando sin esperar a que termine el setTimeout, para eso me voy a la funcion it y agrego done un fakeAsync
  constructor(private router: Router) { }
  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['login']);
    }
    , 1000);
  }

}
