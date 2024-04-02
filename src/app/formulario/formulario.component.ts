import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent{
  tipo:string="IngresoOperacion";

  tipoOperacion (evento: { target: { value: string; }; }){
    this.tipo = evento.target.value;
  }
}
