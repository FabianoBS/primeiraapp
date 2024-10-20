import React from "react";
import Header from "../../components/header/header";
import Trailer from "../../components/trailer/trailer";
import Cards from "../../components/cards";
import Footer from "../../components/footer/footer";
import './styles.css'

function Home(){
    return (
        <>
            <Header />
            <div id='banner'></div>
            <Trailer />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;