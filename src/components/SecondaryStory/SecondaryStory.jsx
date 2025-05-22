import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";

const SecondaryStory = ({ id, title, image, location, abstract }) => {
  return (
    <StoryLink href={`/story/${id}`}>
      <Wrapper>
        <Image alt={image.alt} src={image.src} />
        <Heading>{title}</Heading>
        <div>
          <Abstract>{abstract}</Abstract>
        </div>
      </Wrapper>
    </StoryLink>
  );
};

const StoryLink = styled.a`
  padding: 16px 0;
  background-color: var(--color-gray-100);

  @media (${QUERIES.tabletOnly}) {
    &:first-of-type {
      padding-top: 0;
    }

    &:last-of-type {
      padding-bottom: 0;
    }
  }
`;

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 120px 1fr;
  grid-template-areas:
    "image heading"
    "image abstract";
  gap: 4px 16px;
  color: var(--color-gray-900);

  @media (${QUERIES.tabletOnly}) {
    grid-template-areas:
      "image"
      "heading"
      "abstract";
    grid-template-columns: revert;
  }
`;

const Image = styled.img`
  grid-area: image;
  display: block;
  width: 100%;
  height: 120px;
  border-radius: 4px;
  object-fit: cover;
`;

const Heading = styled.h2`
  grid-area: heading;
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  /* Optical alignment */
  margin-top: -2px;
  padding-top: 4px;
`;

const Abstract = styled.p`
  grid-area: abstract;
  font-size: 1rem;
  white-space: pre-wrap;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

export default SecondaryStory;
