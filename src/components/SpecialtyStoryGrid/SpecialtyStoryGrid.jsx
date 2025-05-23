import React from "react";
import styled from "styled-components";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";
import { QUERIES } from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
        <StoryContainer>
          <SportsStories>
            {SPORTS_STORIES.map((data) => (
              <MiniStory key={data.id} {...data} />
            ))}
          </SportsStories>
        </StoryContainer>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  background-color: var(--color-gray-300);
  @media (${QUERIES.laptopAndUp}) {
    grid-template-columns: 1fr 1fr;
    gap: 1px;
  }
`;

const MarketsSection = styled.section`
  background-color: var(--color-gray-100);
  @media (${QUERIES.laptopAndUp}) {
    padding-right: 16px;
  }
`;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
`;

const SportsSection = styled.section`
  background-color: var(--color-gray-100);

  @media (${QUERIES.tabletAndUp}) {
    display: grid;
  }

  @media (${QUERIES.laptopAndUp}) {
    padding-left: 16px;
  }
`;

const StoryContainer = styled.div`
  @media (${QUERIES.tabletAndUp}) {
    overflow: auto;
  }
`;

const SportsStories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;

  @media (${QUERIES.tabletAndUp}) {
    display: flex;
  }
`;

export default SpecialtyStoryGrid;
