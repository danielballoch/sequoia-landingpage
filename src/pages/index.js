import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from '@emotion/styled';

const Wrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
max-width: 100vw;
`

export default function Index(){
    // let VideoURL = "video/2023_Glacier_Hybrid_Tundra_1.mp4"
    return (
        <Wrapper>
            {/* <video
                disablePictureInPicture
                id="BgVideo"
                title="Tundra Reel"
                height="100%"
                width="100%"
                loop
                muted
                autoPlay={true}
                playsInline 
                preload="auto"
                type="video/mp4"
                placeholder="../content/Tundra.jpg"
            >
                <source src={VideoURL} type="video/mp4"/>
            </video> */}
            <StaticImage src="../content/Tundra.jpg"/>
        </Wrapper>
    )
}
