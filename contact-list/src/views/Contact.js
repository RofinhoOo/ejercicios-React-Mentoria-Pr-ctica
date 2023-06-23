import React from "react";
import useAppContext from '../store/Context';


const Home = () =>{

    const {store, actions} = useAppContext();

    return(
        <>
            <h1>Hola</h1>
        </>
    )

}

export default Home;
