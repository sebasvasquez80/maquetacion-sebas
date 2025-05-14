import "./Acerca.css";
import imagenes from "../assets/imagenes";
import BackMenu from '../components/BackMenu.jsx';

function Acerca() {
    return(
        <aside className="acerca-page">
            <div className="titulo">
                <h1>Acerca de</h1>
            </div>
            <section className="acerca-container">
                <div className="card-textImg">
                    <h2>Historia de la comunidad</h2>
                    <img src={imagenes.img2} alt="" />
                </div>
                <div className="card-textImg">
                    <h2>Objetivo y valores</h2>
                    <img src={imagenes.img3} alt="" />
                </div>
                <div className="card-textImg">
                    <h2>Equipo organizador</h2>
                    <img src={imagenes.img1} alt="" />
                </div>
            </section>
            <section>
                <BackMenu />
            </section>
        </aside>
        
    )
}

export default Acerca;