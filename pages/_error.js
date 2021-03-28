import Layout from "../components/layout";

const _error = ({statusError}) => {
    return (
        <Layout>
            <h3>{statusError}</h3>
            <p style={{ textAlign: "center" }}>No se pudo cargar la pagina</p>
        </Layout>
    )
}

export default _error;