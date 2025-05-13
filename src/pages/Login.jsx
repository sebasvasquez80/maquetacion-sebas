import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const navigate = useNavigate();

    const rutaRegistro = () => {
        navigate('/registro');
    };

    return (
        <div className='login-page'>
            <section className="login-container">
                <form className="login-form">
                        <h2>Iniciar Sesión</h2>
                        <label htmlFor="email">Usuario / Correo</label>
                        <input type="text" id="email" placeholder="Usuario / Correo" />
                        <label htmlFor="password">Contraseña</label>
                        <input type="text" id="password" placeholder="Ingresa tu contraseña" />
                        <div className='buttons'>
                            <button type="button" className="login">Iniciar Sesión</button>
                            <button onClick={(e) => { e.preventDefault(); rutaRegistro(); }} type="button" className="register">Únete a nuestra comunidad</button>
                    </div>
                </form>
            </section>
            <section className="login-image">
            </section>
        </div>
    )
}

export default Login;