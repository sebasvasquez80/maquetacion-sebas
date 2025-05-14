import '../pages/Contacto.css';
import BackMenu from '../components/BackMenu.jsx';

function Contacto() {
    return (
        <div className="contacto-page">
            <section className='titulo'>
                <h2>Contacto</h2>
            </section>
            <section className="contacto-container">
                <form className="contacto-form">
                    <h3 className="contacto-titulo">Envía tus Sugerencias</h3>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" placeholder="Nombre completo" />
                    <label htmlFor="email">Correo</label>
                    <input type="text" id="email" placeholder="Ingresa el correo" />
                    <label htmlFor="mensaje">Mensaje</label>
                    <input className='mensaje' id="mensaje" placeholder="Escribe tu mensaje"></input>
                    <div className='buttons'>
                        <button type="submit" className="enviar">Enviar</button>
                    </div>
                </form>
            </section>
            <section className="contacto-directo">
                <h3 className="contacto-section">Contacto Directo</h3>
                <p>Chatea con un administrador:</p>
                <a href="#" className="contacto-link">Iniciar Chat</a>
            </section>
            <section className="volver">
                <BackMenu />
            </section>
        </div>
    )
}

export default Contacto;