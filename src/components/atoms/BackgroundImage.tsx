import styled from "styled-components"

export default function BackgroundImage(){

    return (
        <Image src="/image/img_mainpageBg.jpg"></Image>
    )
}

const Image = styled.img`
    /* background: url(image/img_mainpageBg) no-repeat 50% 50% fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;   */

    /* Set rules to fill background */
	min-height: 100%;
	min-width: 1024px;
	
	/* Set up proportionate scaling */
	width: 100%;
	height: auto;
	
	/* Set up positioning */
	position: fixed;
	top: 0;
	left: 0;
    
    z-index: -1; // TODO: global로 묶여서 관리하도록 변경

    @media screen and (max-width: 1024px) { /* Specific to this particular image */
        img.bg {
            left: 50%;
            margin-left: -512px;   /* 50% */
        }
    }
`