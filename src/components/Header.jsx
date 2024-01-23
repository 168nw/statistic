import {Link} from 'react-router-dom'
import logoSvg from '../img/logo.png'


function Header() {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
        <div className="header__logo">
          <img width="38" src={logoSvg} alt="logoStatic" />
          <div>
            <h1>Statistic</h1>
            <p>Полезная статистика</p>
          </div>
        </div>
        </Link>
        <div className="header__cart">
        </div>
      </div>
    </div>
  );
}

export default Header;