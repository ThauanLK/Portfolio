import React from 'react';
import {Link,Main,Positing} from "./style"; 
import Git from "./Git";
import Linkedin from "./Linkedin"

const SocialMedias = () => {
    return (
        <Main>
            <Positing>
                <Link href="https://github.com/ThauanLK" target="_blank">
                   <Git/>
                </Link>
                <Link href="https://www.linkedin.com/in/thauan-corr%C3%AAa-de-oliveira-525334193/" target="_blank">
                    <Linkedin/>
                </Link>
            </Positing>
        </Main>

    );
}

export default SocialMedias;