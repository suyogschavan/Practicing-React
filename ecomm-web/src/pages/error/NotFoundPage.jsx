
import { Header } from '../../components/Header';
import './NotFoundPage.css';
export function NotFoundPage({cartItems}){
    return(
        <>  
        {/* <Header /> */}
            <Header cartItems={cartItems}/>
            <p className="p-msg">404 <br />Page not found</p>
        </>
    )
}