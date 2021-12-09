export default function renderizarElemento(elemento) {
  let elementos = elemento
  let filmes = document.getElementById('filmes')
  filmes.innerHTML = ''
  

  elementos.forEach((e) => {
    
    let divS = document.createElement('div')
    let divG = document.createElement('div')
    divG.className = "containerPrincipalDeBug"
    divS.className = 'containerPrincipal'
    let SpanResume = '<h3> Resumo:  </h3>'
    
    let SpanLancamento = '<h3> Lançamento:  </h3>'
  
    let SpanPopularidade = '<h3> Popularidade:  </h3>'
  
    let title = e.title
    let over = e.overview
    let date = e.release_date
    let pop = e.popularity
    
    let pOver = document.createElement('p')
    pOver.innerHTML = `${SpanResume}${over}`
  
    let pDate = document.createElement('p')
    pDate.innerHTML = `${SpanLancamento}${date}`
  
    let pPop = document.createElement('p')
    pPop.innerHTML = `${SpanPopularidade}${pop}`
  
    let h1Title = document.createElement('h1')
    h1Title.innerHTML = title

    divS.append(h1Title, pOver, pPop, pDate)
    divG.append(divS)
    filmes.append(divG)
  })
}

