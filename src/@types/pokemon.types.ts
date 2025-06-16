export interface Pokemon {
  id?: string;
  species: {
    name: string;
  };
  sprites: {
    front_shiny: string;
  };
}
