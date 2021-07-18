import axios from 'axios';

export const CharactersApi = {
  async getAllCharacters(params) {
    return axios.get('https://rickandmortyapi.com/api/character', {params});
  }
}