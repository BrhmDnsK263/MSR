import React from 'react';
import  logo2 from '../logo/logo2.svg'

function HeaderComponent() {
  return (
    <div className="HeaderComponent">
      <header>
      	<nav>
          <ul>
            <li>
              <a href={"/"}>
                <img id="logo" src={logo2} alt="logo" />
                Inicio
              </a>
            </li>

          </ul>
      	</nav>
        <div className="HeaderComponentTitle">
          <h1>Movies and Series</h1>
          <h2>Researcher</h2>
        </div>
      </header>
    </div>
  );
}

export default HeaderComponent;
