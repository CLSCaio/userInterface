import './styles.css'
import { Link } from 'react-router-dom'

export default function NotFound() {
  const error404 = {
    error1: 'https://c.tenor.com/IHdlTRsmcS4AAAAM/404.gif',
    error2: 'https://pipehline.com.br/wp-content/uploads/2020/04/1_qdFdhbR00beEaIKDI_WDCw.gif',
    error3: 'https://miro.medium.com/max/1400/1*zBFBJktPD3_z0S_35kO5Hg.gif',
    error4: 'https://media4.giphy.com/avatars/404academy/kGwR3uDrUKPI.gif',
    error5: 'https://freefrontend.com/assets/img/html-funny-404-pages/HTML-Yeti-404-Page.gif',
    error6: 'https://triscari.com/404/villains/assets/img/404-light.gif',
    error7: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/454b3d15-6df4-4464-b8fd-b27a15ead8d3/d71dicl-193f5647-f6fe-4a06-8921-fb3f498d84f1.gif'
  }

  return (
    <Link to="/" class="notFound">
      <img src={error404.error3}
        alt="Imagem não pode ser carregada - Error 404, página não encontrada"
      />
    </Link>
  )
}