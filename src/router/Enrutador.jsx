import Login from '..//pages/Login.jsx';
import Registro from '../pages/Registro.jsx';
import Home from '../pages/Home.jsx';
import Actividades from '../pages/Actividades.jsx';
import Contacto from '../pages/Contacto.jsx';
import Acerca from '../pages/Acerca.jsx';

export let Enrutador = [
    {
    path: '/',
    element: <Login/>
    },
    {
    path: '/registro',
    element: <Registro/>
    },
    {
    path: '/home',
    element: <Home/>
    },
    {
    path: '/actividades',
    element: <Actividades/>
    },
    {
    path: '/contacto',
    element: <Contacto/>
    },
    {
    path: '/acerca',
    element: <Acerca/>
    },
]