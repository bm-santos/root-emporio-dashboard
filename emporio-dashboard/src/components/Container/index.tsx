import Header from "../Header";
import SideBar from "../SideBar";

export default function Container(props: any) {
    return (
        <>
            <header>
                <Header />
            </header>
            <div>
                <SideBar />
            </div>
            <div>
                {props.children}
            </div>
        </>
    )
}