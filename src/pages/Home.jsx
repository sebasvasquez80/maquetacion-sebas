import '../pages/Home.css';
import { useNavigate } from 'react-router-dom';

function Home(){

    const navigate = useNavigate();
    const rutaLogin = () => {
        navigate('/');
    };

    const rutaActividades = () => {
        navigate('/actividades');
    }

    const rutaContacto = () => {
        navigate('/contacto');
    }

    const rutaAcerca = () => {
        navigate('/acerca');
    }

    return(
        <div className="home-page">
            <section className="bienvenida">
                <h1>Bienvenido, Jaime</h1>
            </section>
            <section className="home-container">
                    <aside className="home-aside">
                        <h4>Actividades recientes</h4>
                        <div className='card-home'>
                            <h5>Primeros pasos en React</h5>
                            <p>Completado</p>
                        </div>
                    </aside>
                    <aside className="home-aside">
                        <h4>Foros o discusiones destacadas</h4>
                        <div className='card-home'>
                            <h5>Xbox se vuelve multiplataforma</h5>
                            <p>777 Interacciones</p>
                        </div>
                    </aside>
                    <aside className="home-aside">
                        <h4>Eventos próximos</h4>
                        <div className='card-home'>
                            <h5>Metodos para aprender un nuevo idioma</h5>
                            <p>Fecha: 20-05-2025</p>
                        </div>
                    </aside>
            </section>
            <section className='home-container-nav'>
                <nav className="home-navegacion">
                    <div className="home-nave-container">
                        <div className='nav-button'>
                            <button onClick={(e) => { e.preventDefault(); rutaActividades(); }} type="button" className="home-avegacion-button">Actividades</button>
                        </div>
                        <div className='nav-button'>
                            <button onClick={(e) => { e.preventDefault(); rutaContacto(); }} type="button" className="home-avegacion-button">Contacto</button>
                        </div>
                        <div className='nav-button'>
                            <button onClick={(e) => { e.preventDefault(); rutaAcerca(); }} type="button" className="home-avegacion-button">Acerca de</button>
                        </div>
                    </div>
                </nav>
            </section>
            <section className="cerrar-Sesion">
                <button onClick={(e) => { e.preventDefault(); rutaLogin(); }} type="button" className="Cerrar-Sesion-button">Cerrar Sesión</button>
            </section>
        </div>
    )
}

export default Home;