import React from "react";
import styled from "styled-components";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <SecondaryStoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </SecondaryStoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  margin-bottom: 48px;
  background-color: var(--color-gray-300);

  @media (${QUERIES.tabletAndUp}) {
    grid-template-columns: 1fr 252px;
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
    gap: 0 1px;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  background-color: var(--color-gray-100);
  padding-bottom: 24px;

  @media (${QUERIES.tabletOnly}) {
    padding-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  background-color: var(--color-gray-100);
  padding: 24px 0;
  @media (${QUERIES.tabletOnly}) {
    padding: 0;
    padding-left: 16px;
  }
`;

const SecondaryStoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  background-color: var(--color-gray-300);
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  background-color: var(--color-gray-100);
  padding: 24px 0;
`;

const OpinionStoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  background-color: var(--color-gray-300);

  @media (${QUERIES.tabletOnly}) {
    background-color: revert;
    flex-direction: row;
    gap: 32px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  background-color: var(--color-gray-100);
  padding-top: 24px;
`;

export default MainStoryGrid;
