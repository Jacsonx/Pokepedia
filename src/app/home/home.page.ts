import { Component } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';
import { ModalController } from '@ionic/angular';
import { PokemonsPage } from '../pokemons/pokemons.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    public data;
    public image;
    public bulbasaur;
    public charizard;
    public suicune;
    public ampharos;
    public mewtwo;
    public onix;

    constructor(
        public pokeApi: PokeapiService,
        public modalController: ModalController,
        public route: Router
    ) {
        this.presentModal()

    }


    ionViewDidEnter() {
        this.getPokemon();
       // this.presentModal();
    }


    async getPokemon() {
        this.data = await this.pokeApi.getPokemons('bulbasaur');
        this.bulbasaur = this.data.sprites.front_default;
        this.data = await this.pokeApi.getPokemons('charizard');
        this.charizard = this.data.sprites.front_default;
        this.data = await this.pokeApi.getPokemons('suicune');
        this.suicune = this.data.sprites.front_default;
        this.data = await this.pokeApi.getPokemons('ampharos');
        this.ampharos = this.data.sprites.front_default;
        this.data = await this.pokeApi.getPokemons('mewtwo');
        this.mewtwo = this.data.sprites.front_default;
        this.data = await this.pokeApi.getPokemons('onix');
        this.onix = this.data.sprites.front_default;

        //Ampharos
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: PokemonsPage,
            cssClass: 'my-custom-modal-css'
        });
        return await modal.present();
    }


    getPokemons() {
        this.route.navigateByUrl('/pokemon');
    }

    getEvolutions() {
        this.route.navigateByUrl('/evolutions')
    }


    getItems() {
        this.route.navigateByUrl('/items');
    }

    getAbilities() {
        this.route.navigateByUrl('/abilities');
    }

    getGames() {
        this.route.navigateByUrl('/games');
    }

    getLocations() {
        this.route.navigateByUrl('/locations');
    }


}
