import Navbar from "../navbar/navbar";

export default function Header(props) {
    return (
        
        <>
            <nav>
                <p>{props.titulo}</p>
                <Navbar/>
            </nav>
        </>

    );
}