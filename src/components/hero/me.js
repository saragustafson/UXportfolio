import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import Header from "../headers/light.js";
import { ReactComponent as SVGBlob1 } from "../../images/fullblob1.svg";
import { ReactComponent as SVGBlob2 } from "../../images/fullblob2.svg";
import Sara from "../../images/Sara.png";
import Fade from 'react-reveal/Fade';
import Iframe from 'react-iframe';

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-start max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-left lg:text-left pt-16`;
const RightColumn = tw.div`relative mt-32 lg:mt-0 flex flex-col justify-center`;
const Bio = tw.div`mt-24 md:flex justify-center items-center`;
const Video = tw.div`border-opacity-5 z-10 mt-12 shadow-lg overflow-hidden border-8 border-purple-200 rounded-lg transform translate-x-16`
const Heading = tw.h1`font-medium text-3xl md:text-5xl leading-snug max-w-3xl pl-8 pt-3 text-black`;
const Paragraph = tw.p`my-2 lg:my-8 text-sm lg:text-base font-medium text-gray-600 max-w-lg mx-auto lg:mx-0 pl-8`;

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:max-w-md sm:max-w-sm lg:h-144 w-144 xl:h-144 w-144 flex-shrink-0 h-80 md:h-144 bg-contain bg-no-repeat bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Title = tw.h1`text-3xl font-bold text-gray-900`;
const BioDescription = tw.p`mt-2 text-sm leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const Blob2 = tw(
  SVGBlob1
)`absolute top-0 right-0 transform rotate-45 -z-10 translate-y-24 translate-x-32 opacity-50 text-primary-500 fill-current w-128`;
const Blob3 = tw(
  SVGBlob1
)`absolute bottom-0 left-0 transform  -rotate-90 -translate-y-8 translate-x-16 -z-10 opacity-50 text-primary-500 fill-current w-128`;

export default ({
  heading = "Glad you made it here!",
  description="Check out the video if you want to know more about why human-centered design is in my life.",
  scrolldescription="⬇ Scroll down to read some words I wrote about myself!",
  arrowdes="⬇",
  title="Hi, again",
  biodescription="Besides putting my heart into every project I’m involved in, I am also a Human Centered Design and Engineering student at the University of Washington. I dedicate myself to supporting women in STEM field in the sorority I belong to, Phi Sigma Rho. I pursue leadership positions in my extracurricular activities and am currently my sorority’s Vice President of Membership. I am also an avid runner and hiker and love finding myself outdoors! I’ve always had a creative disposition and constantly throw myself into projects that expend my artistic energy.",
  futuredescription="In my near future I would love to graduate from UW and pursue a Masters degree in Human Computer Interaction. I also want to discover the places, people, and activities that fuel my creativity!",
  url="mailto: saram@gusplace.com"
}) => {
  return (
    <>
      <Header />
      <Container>
        <Fade>
        <TwoColumn>
          <LeftColumn>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
            <Paragraph>{scrolldescription}</Paragraph>
          </LeftColumn>
          <RightColumn>
            <Video>
              <Iframe 
                url="https://www.youtube.com/embed/RbNrxUgk7mQ?autoplay=1&mute=1&controls=1&loop=1&playsinline=1&enablejsapi=1&widgetid=1" 
                allowFullScreen="allowFullScreen"
                width="560px"
                height="315px"
                display="initial"
                position="relative"/>
            </Video>
          </RightColumn>
        </TwoColumn>
          <Bio>
            <Image imageSrc={Sara} tw="pt-24"/>
            <Details>
                  <Title>{title}</Title>
                  <BioDescription>{biodescription}</BioDescription>
                  <BioDescription>{futuredescription}</BioDescription>
                  <Link href={url}>Contact me!</Link>
            </Details>
          </Bio>
          </Fade>
        <Blob2 />
        <Blob3 /> 
      </Container>
    </>
  );
};