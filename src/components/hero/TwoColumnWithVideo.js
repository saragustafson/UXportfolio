import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import Header from "../headers/light.js";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/blob1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/fullblob2.svg";

import DesignIllustration from "../../images/design-illustration.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-start max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-left lg:text-left pt-16`;

const Heading = tw.h1`font-medium font-display text-3xl md:text-5xl leading-snug max-w-3xl pl-8 pt-3 text-black`;

const Actions = tw.div`flex flex-col items-start sm:flex-row justify-start lg:justify-start mt-8 pl-8`;
const PrimaryButton = tw.button`shadow font-medium px-8 lg:px-6 py-3 rounded-full bg-primary-500 text-gray-100 hocus:bg-primary-900 focus:shadow-outline focus:outline-none transition duration-300`;


// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none fill-current text-primary-500 opacity-50 fixed h-6/12 right-0 bottom-0 -z-10`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none fill-current text-primary-500 opacity-50 absolute top-0 left-0 max-h-screen translate-x-20 pt-4 -z-10`}
`;


export default ({
  heading = "Hey there, my name is Sara & I'm a human centered designer.",
  primaryButtonText="Have a look at what I do!",
  primaryButtonUrl="/projects",

}) => {


  return (
    <>
      <Header />
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>{heading}</Heading>
            {/* <Paragraph>{description}</Paragraph> */}
            <Actions>
              <PrimaryButton as="a" href={primaryButtonUrl}>{primaryButtonText}</PrimaryButton>

            </Actions>
          </LeftColumn>

        </TwoColumn>
        <DecoratorBlob2 />
        {/* <DecoratorBlob1 /> */}
        
      </Container>
    </>
  );
};
