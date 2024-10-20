import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

function Profile(){
    const {login} = useContext(UserContext)
    
    return (
        <div>
            {login ? 'dados do usuário' : 'Faça o seu login para ter acesso às informações.'}
        </div>
    )
}

export default Profile;