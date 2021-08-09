import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ]
})
export class PokemonModule {
    name: string;
    url: string;
}

export interface Sprites {
    back_default: string;
    back_female?: any;
    back_shiny: string;
    back_shiny_female?: any;
    front_default: string;
    front_female?: any;
    front_shiny: string;
    front_shiny_female?: any;
}

export interface Type2 {
    name: string;
    url: string;
}

export interface Type {
    slot: number;
    type: Type2;
}

export interface VersionGroup {
    name: string;
    url: string;
}

export interface RootObject {
    form_name: string;
    form_names: any[];
    form_order: number;
    id: number;
    is_battle_only: boolean;
    is_default: boolean;
    is_mega: boolean;
    name: string;
    names: any[];
    order: number;
    pokemon: PokemonModule;
    sprites: Sprites;
    types: Type[];
    version_group: VersionGroup;
}
