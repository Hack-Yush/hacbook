// home page

// styles
import HS from "../styles/pages/home.module.css";

// components
import { Header } from "../components/header";


const Home = ()=>{

return(
    <div className={HS.homeScreen}>
        <Header/>
    </div>
)


}

export default Home