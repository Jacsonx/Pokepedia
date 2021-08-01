import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class PokeapiService {
    //https://pokeapi.co/api/v2/pokemon/
    constructor(
        public httpClient: HttpClient
    ) { }


    async getPokemons(pokemon: string) {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        return this.httpClient.get(url).toPromise();
    }
}
