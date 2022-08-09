import React from "react";
import Directory from "../../components/directory/Directory";
import { useParams, useLocation} from 'react-router-dom'

import {HomeContainer} from './home.styles';

function Home() {
    return(
        <HomeContainer>
           <Directory />
        </HomeContainer>
    )
}

export default Home;