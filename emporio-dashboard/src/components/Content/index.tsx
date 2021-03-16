import Footer from "../Footer";
import Header from "../Header";
import SideBar from "../SideBar";

export default function Content(props: any) {
    return (
        <div className="container-main">
            <header className="container-header">
                <Header />
            </header>
            <aside className="container-sidebar">
                <SideBar />
            </aside>
            <main className="container-content">
                {props.children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}