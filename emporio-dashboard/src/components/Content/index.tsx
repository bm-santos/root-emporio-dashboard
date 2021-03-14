import Header from "../Header";
import SideBar from "../SideBar";
import './index.css';

export default function Content(props: any) {
    return (
        <div className="container-main">
            <div className="container-header">
                <Header />
            </div>
            <div className="container-sidebar">
                <SideBar />
            </div>
            <div className="container-content">
                {props.children}
            </div>
        </div>
    )
}