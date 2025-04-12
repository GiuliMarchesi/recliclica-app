import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { LoaderPage } from './loader.page';
import { Router } from '@angular/router';
// import { AppRoutingModule } from 'src/app/app-routing.module';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  //creo variable router para poder navegar entre paginas
  let router: Router;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    //instancio la variable router  para poder navegar entre paginas 
    router = TestBed.get(Router);
  });
  //prueba para navegar entre pagina, cuando se va a la pagina de loader me debe redirigir a la pagina de login
  it('should call ngOnInit', fakeAsync(() => {
    //espionaje para saber si se navega a la pagina de login
    //cuando se llama al metodo ngOnInit de la clase LoaderPage 
    spyOn(router, 'navigate');
    component.ngOnInit(); 
    tick(1500);
    expect(router.navigate).toHaveBeenCalledWith(['login']);
  }))
});
