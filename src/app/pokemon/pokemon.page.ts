import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.page.html',
    styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
    public response;
    public data;
    public image;


    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

    constructor(
        public pokeapi: PokeapiService
    ) { }

    ngOnInit() {

    }



    ionViewDidEnter() {
        this.loadData();
    }

    async loadData() {
        this.data = await this.pokeapi.getPokemons('bulbasaur');
        this.image = this.data.sprites.front_default;

        let responseRaw = await this.pokeapi.getAllPokemons(100, 0);
        this.response = responseRaw['results'];
        console.log(this.response);
    }


    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }


}
