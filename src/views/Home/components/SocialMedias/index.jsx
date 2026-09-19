import React from 'react';
import {Link,Main,Positing} from "./style";
import Git from "./Git";
import Linkedin from "./Linkedin"

const SocialMedias = () => {
    return (
        <Main aria-label="Redes sociais">
            <Positing>
                <Link aria-label="GitHub de Thauan" href="https://github.com/ThauanLK" target="_blank" rel="noopener noreferrer">
                   <Git/>
                </Link>
                <Link aria-label="LinkedIn de Thauan" href="https://www.linkedin.com/in/thauan-corr%C3%AAa-de-oliveira-525334193/" target="_blank" rel="noopener noreferrer">
                    <Linkedin/>
                </Link>
            </Positing>
        </Main>

    );
}

export default SocialMedias;
