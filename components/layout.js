import Navbar from "./navbar";
import {useEffect} from "react";
import {useRouter} from "next/router"
import nprogress from "nprogress"

const Layout = ({ children }) => {
    const router = useRouter();

    useEffect(() => {

        //Funcion para visualizar cambio de route
        const handlerRouterChange = url => {
            console.log(url)
            nprogress.start();
        }
        
        //Inicializar funcion
        router.events.on('routeChangeStart', handlerRouterChange);

        //Finalizar carga de pagina
        router.events.on('routeChangeComplete', () => nprogress.done());

        //Apagar funcnion de escucha
        return (() => {
            router.events.off('routeChangeStart', handlerRouterChange);
        })
    }, [])

    return (
        <>
            <Navbar/>
            { children }
        </>
        
    )
}

export default Layout;