import { Header } from "../components/Header";
import './NotFoundPage.css';
export function NotFoundPage(){
    return(
        <>  <Header/>
            <p className="p-msg">404 <br />Page not found</p>
        </>
    )
}