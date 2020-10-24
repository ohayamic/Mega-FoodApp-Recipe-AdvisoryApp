import React from 'react'
import styled from "styled-components"

const FooterDiv = styled.footer`
  margin-top:2rem;
  padding: 3rem;
  text-align:center;
  background-color: gray;
  color:white;
  `

export const Footer = () => {
    // get the Date inbuilt function
  let d = new Date();
  
    return ( 
        <FooterDiv className="section">
            <p>Copyright {/* */}
                 <i className="fas fa-copyright"></i> {/* */}
                {d.getFullYear()}{"/"}{d.getMonth() + 1}
                {"/"}{d.getUTCDate()} Michael Onyebuchi Ohaya. All Rights Reserved.
            </p>
        </FooterDiv>        
    )
}
