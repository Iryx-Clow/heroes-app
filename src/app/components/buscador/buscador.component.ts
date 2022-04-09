import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  texto!: string;

  constructor(private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.texto = params['texto'];
      this.heroes = this.heroesService.buscarHeroe(this.texto);
      console.log(this.heroes);

    });
  }

}
