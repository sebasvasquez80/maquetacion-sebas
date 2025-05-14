import "./Actividades.css";
import BackMenu from "../components/BackMenu";

function Actividades(){
    return(
        <div className="actividades-page">
            <section className="titulo">
            <h1>Beneficios</h1>
            </section>
            <section className="actividades-container">
                <div className="card-actividades">
                    <h2>Actividades exclusivas para miembros</h2>
                    <p>Descubre un mundo de oportunidades y conexiones especialmente diseñado para los miembros de nuestra comunidad. Aquí encontrarás beneficios únicos que enriquecerán tu experiencia social y te permitirán interactuar de formas nuevas y emocionantes.</p>
                </div>
                <div className="card-actividades">
                    <h2>Talleres o webinars</h2>
                    <p>Conexiones con profesionales de la industria y oportunidades de colaboración.</p>
                </div>
                <div className="card-actividades">
                    <h2>Recursos descargables</h2>
                    <p>Accede a nuestra selección exclusiva de recursos descargables, diseñados para potenciar tu experiencia y brindarte herramientas valiosas al alcance de un clic. Descarga, utiliza y saca el máximo provecho de este material especialmente preparado para ti.</p>
                    <aside className="cards">
                        <div className='card-act'>
                            <h5>Domina el miedo</h5>
                            <a href="">Descargar</a>
                        </div>
                        <div className='card-act'>
                            <h5>Cuida el medio ambiente</h5>
                            <a href="">Descargar</a>
                        </div>
                        <div className='card-act'>
                            <h5>Secretos de millonarios</h5>
                            <a href="">Descargar</a>
                        </div>
                    </aside>
                </div>
            </section>
            <section className="volver">
            <BackMenu/>
            </section>
        </div>
    )
}

export default Actividades;