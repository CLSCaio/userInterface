import axios from "axios";
import renderizarElemento from "../functions/outras/renderizarElemento";

export default function retonarFilmes() {
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3cc36e72428bd7c96c36cd106695e7f4&query=matrix&page=1`)
  .then(resp => resp.data)
  .then(data => data.results)
  .then(results => {
    renderizarElemento(results)
  })

  .catch(error => console.log(error))
}


