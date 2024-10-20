import React, { useEffect } from "react";
import Header from "../../components/header/header";
import { useParams } from "react-router-dom";

function Detalhes(){
    const params = useParams();
    console.log(params.id)

    useEffect(() => {
        
    },[])

    return (
        <div>
            <Header />
            Detalhes
        </div>
    )
}

export default Detalhes;