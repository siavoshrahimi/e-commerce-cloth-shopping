import React from "react";
import Directory from "../../components/directory/Directory";
import { useParams, useLocation} from 'react-router-dom'

import {HomeContainer} from './home.styles';

function Home(props) {
    let params = useParams();
    let location = useLocation();
    console.log(params, location,props)
    return(
        <HomeContainer>
           <Directory />
        </HomeContainer>
    )
}

export default Home;