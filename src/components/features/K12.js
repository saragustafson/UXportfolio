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
const Content = tw.div`mt-16 pl-2 mr-32 `;
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h1`text-4xl font-medium text-gray-900`;
const Description = tw.p`mt-2 text-lg leading-tight text-gray-900`;
const ProjsDetails = tw.p`mt-2 text-sm leading-tight`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;
const Project = tw.div`md:flex justify-start items-start ml-12 mt-12`;
const Frame = tw.div`md:flex justify-end items-end mt-24 w-1/2`;
const Actions = tw.div`flex flex-col items-start sm:flex-row justify-start lg:justify-start mt-8`;
const PrimaryButton = tw.button`shadow font-medium px-8 lg:px-6 py-3 rounded-full bg-primary-500 text-gray-100 hocus:bg-primary-900 focus:shadow-outline focus:outline-none transition duration-300`;

const Blob1 = tw(
  SVGBlob1
)`absolute top-0 left-0 transform rotate-90 translate-y-80 ml-80 translate-x-144 -z-10 opacity-50 text-primary-500 fill-current w-144`;

export default ({
  primaryButtonText="Check out my case study!",
  primaryButtonUrl="https://medium.com/@saram_88495/k-12-outreach-impact-8b827caa8e83",
  url="/projects",
  nexprojurl="/projects/seattle-transit",
  title="K-12 Outreach Impact",
  description="A research project to find connections between college students and their outreach experience.",
  linebr= '. . .',
  role="Role: UX Researcher & Designer",
  timeline="Timeline: 6 months",
  summary="Summary: We conducted user research using surveys and interviews to confirm the cyclical nature of outreach. Refined design skills by crafting outreach resources for the future of virtual K-12 outreach. ",
  takeaway="Main Takeaway: User research unveils endless design opportunities, and pursuing an unexpected project is both challening and rewarding.",

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
            <Link href={nexprojurl}>🚊 Next Project: Seattle Transit</Link>
          </Content>
            <Frame>
              <Iframe 
                url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FwcIap46z49NIqICR68VvoA%2FK-12-Charrette-Workbook%3Fnode-id%3D9%253A5%26viewport%3D-705%252C292%252C0.28151750564575195%26scaling%3Dmin-zoom&chrome=DOCUMENTATION"
                width="800px"
                height="450px"
                id="myId"
                display="initial"
                position="relative"/>
            </Frame>
        </Project>
      </SingleColumn>
      <Blob1 />
    </Container>
  );
};