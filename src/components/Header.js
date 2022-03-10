import logo from "./assets/img/logo.png";
function Header(){
  return (
      <header className='navbar'>
        <nav className="container">
          <div className="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div className="separador"></div>
            <img src={logo}/>
          </div>

          <div className="logo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
          </div>

          <div className="instagram-mobile">
            <img src="assets/img/logo.png" />
          </div>
  
          <div className="pesquisa">
            <input type="text" placeholder="Pesquisar" />
          </div>
  
          <div className="icones">
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
          </div>

          <div className="icones-mobile">
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
        </nav>
      </header>
  );
}

export default Header;