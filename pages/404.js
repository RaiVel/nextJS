import Layout from "../components/layout";
import Link from "next/link";

const custom404 = () => (
    <Layout>
        Pagina 404
        <Link href="/">
            <a>Volver a home</a>
        </Link>
    </Layout>
)

export default custom404;