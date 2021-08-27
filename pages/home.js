// home page

// styles
import HS from "../styles/pages/home.module.css";

// components
import { Header } from "../components/header";
import { CategoryBox } from "../components/CategoryBox"

const Home = () => {

    return (
        <div className={HS.homeScreen}>
            <Header />
            <div className={HS.book_container}>
                <div className={HS.leftbar}>
                    <div className={HS.Cbox}>
                        <CategoryBox />
                    </div>
                </div>

                <div className={HS.book_content} >
                    <div className={HS.book_banner}>

                    </div>
                    <div className={HS.book_mains}>
                        <div className={HS.author}>
                            <div className={HS.heading}>
                                <div className={HS.HBox}>
                                    <div className={HS.h1}>Best Seller</div>
                                    <div className={HS.h2}>New Arrivals</div>
                                    <div className={HS.h3}>Pre Orders</div>
                                </div>
                                <div className={HS.SM}>
                                    See All
                                </div>
                            </div>
                        </div>                
                        <div className={HS.Bestseller}>
                            <div className={HS.heading}>
                                <div className={HS.HB}>
                                    <div className={HS.NTB}>NewYork Times Bestseller</div>
                                    <div className={HS.AW}>Award Winner</div>
                                    <div className={HS.SP}>Staff Picks</div>
                                </div>
                                <div className={HS.SM1}>See All</div>
                            </div>
                        </div>
                        <div className={HS.BoxSet}>
                            <div className={HS.heading}>
                                <div className={HS.HBox}>
                                    <div className={HS.Bheading}>Box Set</div>
                                
                                </div>
                                <div className={HS.SM}>
                                    See All
                                </div>
                            </div>
                        </div>
                        <div className={HS.Author}>
                            <div className={HS.heading}>
                                <div className={HS.HBox}>
                                    <div className={HS.Aheading}>Featured Author</div>
                                </div>
                                <div className={HS.SM}>
                                    See All
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>



    )


}

export default Home