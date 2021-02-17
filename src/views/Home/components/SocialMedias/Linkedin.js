import React from 'react';
import styled from 'styled-components';

const SVGWrapper = styled.svg`
  cursor: pointer;
  opacity:0.5;
  height: 120px;
  &:hover {
    .linkedin{
        animation:showUp 1.5s ease-in-out;

    }
    @keyframes showUp{
        0%   {transform: scale(0);}
        100% {transform: scale(1);}
    }
    opacity:1; 
    transition: 0.2s;
  } 

  @media (max-width:500px){
    &:hover .octo-arm{
      animation:none
    }
    & .octo-arm{
      animation:octocat-wave 560ms ease-in-out
    }
  }
`;

export default function GitHubCorner() {
  return (
        <SVGWrapper  width="80" height="100" viewBox="0 0 250 250" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" className="linkedin"/></svg>
        </SVGWrapper>
  );
}