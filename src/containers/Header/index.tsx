import { SHeader } from './style'

const Header = () => {
  return (
    <SHeader>
      <h1>
        <a href="#">Meu Site</a>
      </h1>
      <ul>
        <li>
          <a href="#">Visao geral</a>
        </li>
        <li>
          <a href="#">Teach Specs</a>
        </li>
        <li>
          <a href="#">Reviews</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </SHeader>
  )
}

export default Header
