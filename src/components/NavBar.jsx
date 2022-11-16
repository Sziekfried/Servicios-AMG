
function NavBar() {
  return (
    <>
    <nav>
        <div className="nav-wrapper container">
            <a className="brand-logo">Servicios A.V.G</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li> <a href="#home">Inicio</a> </li>
                <li> <a>Servicios</a> </li>
                <li> <a>Contacto</a> </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default NavBar