import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { ReactComponent as SVGBlob1 } from "../../images/fullblob1.svg";
import { ReactComponent as SVGBlob2 } from "../../images/fullblob2.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import Header from "../headers/light.js";
import Fade from 'react-reveal/Fade';
import TAT from '../../images/TATAT.png';
import WSWS from '../../images/wswsw.png';
import ST from '../../images/stst.png';
import K12 from '../../images/k12.png';

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-0 lg:py-0`;


const Content = tw.div`mt-16 pl-8`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center `,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:max-w-md sm:max-w-sm lg:h-144 w-144 xl:h-144 w-144 flex-shrink-0 h-80 md:h-144 bg-contain bg-no-repeat bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h1`text-3xl font-medium text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;


const Blob1 = tw(
  SVGBlob1
)`absolute top-0 left-0 transform  rotate-90 translate-y-32 translate-x-24 -z-10 opacity-50 text-primary-500 fill-current w-128`;
const Blob2 = tw(
  SVGBlob2
)`absolute pt-32 top-0 right-0 transform translate-x-20 rotate-45 translate-y-144 -translate-x-12 -z-10 opacity-50 text-primary-500 fill-current w-144`;
const Blob3 = tw(
  SVGBlob1
)`absolute pb-16 bottom-0 left-0 transform  -rotate-90 -translate-y-144 translate-x-24 -z-10 opacity-50 text-primary-500 fill-current w-128`;
const Blob4 = tw(
  SVGBlob2
)`absolute bottom-0 right-0 transform -translate-x-10 rotate-90 -translate-y-1 -z-10 opacity-50 text-primary-500 fill-current w-128`;


export default () => {
  const cards = [
    {
      imageSrc: TAT,
      subtitle: "Case Study",
      title: "Tattoo Artist Tool",
      description: "A tool used to help manage the busy lives of tattoo artists.",
      url: "/projects/tattoo-artist-tool"
    },

    {
      imageSrc: WSWS,
      subtitle: "Brand Redesign",
      title: "West Sound Wildlife Shelter",
      description:"A redesign of a Seattle non-profit wildlife organization",
      url: "/projects/west-sound-wildlife-shelter"
    },

    {
      imageSrc: K12,
      subtitle: "User Research",
      title: "K-12 Outreach Impact",
      description:"A research project to find connections between college students and their outreach experience.",
      url: "/projects/k-12-outreach-impact"
    },

    {
      imageSrc: ST,
      subtitle: "Brand Redesign",
      title: "Seattle Transit",
      description:"A redesign of the Seattle Public Transporation visual system",
      url: "/projects/seattle-transit"
    }
  ];

  return (
    <Container>
      <Header />
      <SingleColumn>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Fade>
                <Image imageSrc={card.imageSrc} />
                <Details>
                  <Subtitle>{card.subtitle}</Subtitle>
                  <Title>{card.title}</Title>
                  <Description>{card.description}</Description>
                  <Link href={card.url}>Learn more</Link>
                </Details>
              </Fade>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      
      <Blob1 />
      <Blob2 />
      <Blob3 />
      <Blob4 /> 
    </Container>
  );
};
