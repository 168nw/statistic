import {Link} from 'react-router-dom'
import logoSvg from '../img/logo.png'


function Header() {
  return (
    <header className="header d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center headerLeft">
          <img width={40} height={40} src={logoSvg} alt="logoStatic" />
          <div>
            <h1>Statistic</h1>
            <p opacity-5>Полезная статистика</p>
          </div>
        </div>
      </Link>
      <ul className='d-flex'>
        <li>
          <svg className='mr-30' width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.9992 21L14.9492 14.95" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </li>
        <li>
          <svg className='mr-30' width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1992 12C14.9606 12 17.1992 9.76142 17.1992 7C17.1992 4.23858 14.9606 2 12.1992 2C9.43779 2 7.19922 4.23858 7.19922 7C7.19922 9.76142 9.43779 12 12.1992 12Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 22C3.57038 20.0332 4.74796 18.2971 6.3644 17.0399C7.98083 15.7827 9.95335 15.0687 12 15C16.12 15 19.63 17.91 21 22" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </li>
      </ul>
    </header>
  );
}

export default Header;