import React from "react";
import styled from "styled-components";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopStyleWrapper>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
        </DesktopStyleWrapper>
        <Logo />
        <DesktopStyleWrapper>
          <Button>Subscribe</Button>
          <LoginLink>Already a subscriber?</LoginLink>
        </DesktopStyleWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media (${QUERIES.tabletAndUp}) {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media (${QUERIES.laptopAndUp}) {
    justify-content: space-between;
    margin-top: 16px;
    margin-bottom: 81px;
  }
`;

const DesktopStyleWrapper = styled.div`
  display: none;

  @media (${QUERIES.laptopAndUp}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const LoginLink = styled.a`
  font-size: ${14 / 16}rem;
  font-style: italic;
  font-weight: var(--font-weight-normal);
  font-family: var(--font-family-serif);
  color: var(--color-gray-900);
  text-decoration: underline;
  text-align: center;
  margin-top: 8px;
`;

export default Header;
