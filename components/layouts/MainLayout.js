import Head from "next/head";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";

export default function MainLayout({ children, title }) {
    return (
        <>
            <Head>
                <title>{title || 'Reference App'}</title>
                <meta name="author" content="Juan Fernando Ramírez" />
                <meta name="description" content="Buscador Tablas de Referencia" />
                <meta name="keywords" content="SISPRO, Tablas de Referencia, Datos Abiertos" />
            </Head>

            <div className="container mx-auto min-h-screen flex flex-col">

                <Header />

                <div className="flex-1 flex flex-col sm:flex-row">
                    <main className="flex-1 ml-0 sm:ml-64">
                        {children}
                    </main>

                    <Sidebar />

                </div>
                <Footer />
            </div>

        </>
    )
}
