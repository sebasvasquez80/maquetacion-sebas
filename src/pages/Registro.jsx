import { useNavigate } from 'react-router-dom';
import './Registro.css';

function Registro() {

    const navigate = useNavigate();
    const rutaLogin = () => {
        navigate('/');
    };

    return (
        <div className="registro-page">
            <section className="registro-container">
                <form className="registro-form">
                        <h2>Únete a nuestra comunidad</h2>
                        <label htmlFor="usurio">Usuario</label>
                        <input type="text" id="usuario" placeholder="Ingresa el usuario" />
                        <label htmlFor="password">Contraseña</label>
                        <input type="text" id="password" placeholder="Ingresa la contraseña" />
                        <label htmlFor="confirmar-password">Confirmar Contraseña</label>
                        <input type="text" id="confirmar-password" placeholder="Confirma la contraseña" />
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" placeholder="Nombre completo" />
                        <label htmlFor="email">Correo</label>
                        <input type="text" id="email" placeholder="Ingresa el correo" />
                        <div className="Buttons">
                            <button type="button" className="register">Registrarse</button>
                        </div>
                    <span className="return-login"> ¿Ya tienes una cuenta?
                        <label onClick={(e) => { e.preventDefault(); rutaLogin(); }} htmlFor="login" className="button-Login"> Iniciar sesión </label>
                    </span>
                </form>
            </section>

        </div>
    )
}

export default Registro;