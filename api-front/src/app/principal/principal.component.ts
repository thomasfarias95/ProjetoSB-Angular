import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  cliente = new Cliente();

  btnCadastro:boolean = true;

  clientes: Cliente[] = [];

  constructor(private servico:ClienteService
    
    ){

  }

  selecionar():void{
    this.servico.selecionar()
    .subscribe(retorno => this.clientes = retorno);
  }

  cadastrar():void{
    this.servico.cadastrar(this.cliente)
    .subscribe(retorno => {

      this.clientes.push(retorno);

      this.cliente = new Cliente();

      alert('Cliente cadastrado com sucesso!');
    });
  }

  ngOnInit(){
    this.selecionar();
  }
}
