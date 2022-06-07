import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Button from "../../atoms/Button";
import Logo from "/image/photorage_logo_white.png";
import { useSetRecoilState } from "recoil";
import { loginPopupState, signupPopupState } from "../../../stores/Auth";

export const Header = () => {
  const setLoginPopupOpen = useSetRecoilState<boolean>(loginPopupState);
  const setSignupPopupOpen = useSetRecoilState<boolean>(signupPopupState);
  return (
    <Container>
      <MenuBarWrapper>
        <MenuBarIcon icon={faBars} />
        <MenuBarTitle>Menu</MenuBarTitle>
      </MenuBarWrapper>
      <MainLogo src={Logo} />
      <ButtonWrapper>
        <Button
          onClick={() => setLoginPopupOpen(true)}
          backgroundColor="transparent"
        >
          <ButtonContent>Log in</ButtonContent>
        </Button>
        <Button
          onClick={() => setSignupPopupOpen(true)}
          backgroundColor="transparent"
        >
          <ButtonContent>Sign up</ButtonContent>
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100px;
  padding: 20px 78px;
  background-color: transparent;
`;

const MenuBarWrapper = styled.span`
  ${({ theme }) => theme.mixin.flexCenter()}
  flex-direction: row;
`;

const MenuBarIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: ${({ theme }) => theme.color.light};
  margin-right: 13px;
  width: 32px;
  height: 24px;
`;

const MenuBarTitle = styled.p`
  ${({ theme }) => theme.mixin.fontSize(16)};
`;

const MainLogo = styled.img`
  cursor: pointer;
  width: 250px;
  height: 30px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 120px;
`;

const ButtonContent = styled.span`
  ${({ theme }) => theme.mixin.fontSize(16)};
  font-weight: 700px;
`;
