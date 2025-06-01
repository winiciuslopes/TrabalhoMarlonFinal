import { Component, OnInit } from '@angular/core';
import { PiratasService } from '../servicos/piratas.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
  standalone: false
})

export class ListarPage implements OnInit {

  constructor(private pirata:PiratasService) { }

  piratas: any [] = [];

  ngOnInit() {
    this.pirata.getAllPiratas().subscribe((dados: any) => {
      console.log(dados)
      this.piratas = dados;
    });
}
}