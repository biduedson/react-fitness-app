import { Link } from 'react-router-dom'
import Image from '../images/main_header.png'


const MainHeader = () => {
    return (
        <header className='main_header'>
            <div className="container main_header-container">
                <div className="main_header-left">
                    <h4>#100DaysOfWorkOut</h4>
                    <h1>Junte-se às lendas do mundo fitness</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum eveniet consequatur excepturi? Sapiente, alias enim!
                    </p>
                    <Link to="/plans" className='btn lg' >Vamos
                        Começar</Link>
                </div>
                <div className="main_header-right">
                    <div className="main_header-circle"></div>
                    <div className="main_header-image">
                        <img src={Image} alt="Main Header-image" />
                    </div>
                </div>
            </div>
        </header>
    )
}
export default MainHeader