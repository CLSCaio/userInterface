import '../styles.css'  
import redirecionamentoDePagina from '../../../../services/functions/outras/redirecionamentoDePagina'

export default function Tecnologia() {
  
  return (
    <div className="divPrincipalHome" 
      onClick={() => redirecionamentoDePagina('technology')}
    >
      <img src="https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2021/06/Novas-tecnologias.jpg?quality=100&strip=info&resize=680,453" alt="Imagem não pode ser carregada" />
      <h1> Tecnologia </h1>
      <p> 
        Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas. 
        É uma aplicação prática do conhecimento científico em diversas áreas de pesquisa. 
      </p>
    </div>
    
  )
}