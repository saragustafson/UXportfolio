import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SVGBlob1 } from "../../images/fullblob1.svg";
import { ReactComponent as SVGBlob2 } from "../../images/fullblob2.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import Header from "../headers/light.js";
import Iframe from 'react-iframe'

const Container = tw.div`relative`;
const SingleColumn = tw.div`max-w-screen-xl mx-auto py-0 lg:py-0`;
const Content = tw.div`mt-16 pl-8 mr-80 w-1/2`;
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h1`text-5xl font-medium text-gray-900`;
const Description = tw.p`mt-2 text-lg leading-tight text-gray-900`;
const ProjsDetails = tw.p`mt-2 text-sm leading-tight`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;
const Project = tw.div`md:flex justify-start items-start ml-12 mt-12`;
const Actions = tw.div`flex flex-col items-start sm:flex-row justify-start lg:justify-start mt-8`;
const PrimaryButton = tw.button`shadow font-medium px-8 lg:px-6 py-3 rounded-full bg-primary-500 text-gray-100 hocus:bg-primary-900 focus:shadow-outline focus:outline-none transition duration-300`;
const Proto = tw.div`relative md:flex justify-start items-center mr-12 mt-12`;
const Callout = tw.p`absolute pl-10 pt-4 flex justify-center items-center top-0 mt-2 text-sm leading-tight text-black`;


const Blob1 = tw(
  SVGBlob1
)`absolute top-0 left-0 transform rotate-90 translate-y-80 ml-80 translate-x-144 -z-10 opacity-50 text-primary-500 fill-current w-144`;

export default ({
  primaryButtonText="Check out my case study!",
  primaryButtonUrl="https://medium.com/@saram_88495",
  url="/projects",
  projurl="/projects/ux-portfolio",
  title="Seattle Transit",
  description="A redesign of the Seattle Public Transporation visual communication system.",
  linebr= '. . .',
  role="Role: UX Designer",
  timeline="Timeline: 9 weeks",
  summary="Summary: Designing a mobile application, kiosk flow, as well as wayfinding signs with a dynamic set of users in mind allowed me to entirely refine and revamp the Seattle Public Transportation brand.",
  takeaway="Main Takeaway: Recognizing and applying traditional visual design principles can have a large effect on an application's user experience.",
  callout="Try interacting with the app!"


  }) => {
  
  return (
    <Container>
      <Header />
      <SingleColumn>
        <Project>
          <Content>
            <Link href={url}>⬅ Back to Projects</Link>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Description>{linebr}</Description>
            <ProjsDetails>{role}</ProjsDetails>
            <ProjsDetails>{timeline}</ProjsDetails>
            <ProjsDetails>{summary}</ProjsDetails>
            <ProjsDetails>{takeaway}</ProjsDetails>
            <Actions>
              <Link href={primaryButtonUrl} target="_blank">🖊 {primaryButtonText}</Link>
            </Actions>
            <Link href={projurl}>💻 Next Project: UX Portfolio</Link>
          </Content>
          <Proto>
            <Callout>{callout}</Callout>
            <Iframe 
              url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FYucLufHQG9AvQmFTFNI0aF%2FSeattle-Transit%3Fnode-id%3D144%253A1613%26viewport%3D-116%252C406%252C0.25933706760406494%26scaling%3Dscale-down&chrome=DOCUMENTATION"
              width="300px"
              height="600px"
              id="myId"
              display="initial"
              position="relative"/>
          </Proto>
        </Project>
      </SingleColumn>
      <Blob1 />
    </Container>
  );
};
