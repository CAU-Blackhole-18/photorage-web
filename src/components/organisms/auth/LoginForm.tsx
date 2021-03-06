import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button, {ButtonType} from "@components/atoms/Button";
import CheckBox from "@components/atoms/CheckBox";
import _InputForm, {InputFormProps} from "@components/atoms/InputForm";
import Spacer from "@components/atoms/Spacer";
import Facebook from "/image/btn_facebook.png";
import Instagram from "/image/btn_instagram.png";
import Kakao from "/image/btn_kakao.png";
import Naver from "/image/btn_naver.png";
import Google from "/image/btn_google.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { loginPopupState } from "@src/stores/Auth";

export interface LoginFormProps {
  isLoginPopupOpen: boolean;
};

export default function LoginForm ({
  isLoginPopupOpen
}: LoginFormProps) {

  const [loginPopupOpen, setLoginPopupOpen] = useRecoilState<boolean>(loginPopupState);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const loginPopupRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (loginPopupOpen) {
      loginPopupRef.current.focus();
    }
  }, [loginPopupOpen]);

  return (
    <>
      {loginPopupOpen && <LoginFormLayout />}
      <Container
        ref={loginPopupRef}
        onBlur={(e: React.FocusEvent) => {
          !e.currentTarget.contains(e.relatedTarget) &&
            setLoginPopupOpen(false);
        }}
        tabIndex={-1}
        isLoginPopupOpen={isLoginPopupOpen}
      >
        <ExitIcon onClick={() => setLoginPopupOpen(false)} icon={faXmark} />
        <Title>로그인</Title>
        <Description>이메일</Description>
        <InputForm
          placeholder="example@email.com"
          tabIndex={1}
        />
        <Spacer size={16}/>
        <Description>비밀번호</Description>
        <InputForm
          placeholder="password"
          tabIndex={2}
        />
        {/* <FirstActionWrapper>
          <LoginMaintainWrapper>
            <CheckBox
              checked={isChecked}
              onChange={() => setIsChecked((prev) => !prev)}
            />
            <CheckBoxTitle>로그인 유지</CheckBoxTitle>
          </LoginMaintainWrapper>
          <Button buttonType={ButtonType.TRANSPARENT}>
            <ButtonGreyContent>비밀번호 찾기</ButtonGreyContent>
          </Button>
        </FirstActionWrapper>
        <Button 
          buttonType={ButtonType.DEFAULT} 
          rounded 
          style={{backgroundColor: '#000000'}}
          >
          <ButtonWhiteContent>이메일로 로그인</ButtonWhiteContent>
        </Button>
        <SecondActionWrapper>
          <Button buttonType={ButtonType.TRANSPARENT}>
            <ButtonBlackContent>회원가입</ButtonBlackContent>
          </Button>
          <Button buttonType={ButtonType.TRANSPARENT}>
            <ButtonBlackContent>이메일 찾기</ButtonBlackContent>
          </Button>
        </SecondActionWrapper>
        <SimpleLogin>간편로그인</SimpleLogin>
        <OAuthWrapper>
          <Icon src={Naver} alt={"네이버 간편 로그인"} />
          <Icon src={Kakao} alt={"카카오 간편 로그인"} />
          <Icon src={Google} alt={"구글 간편 로그인"} />
        </OAuthWrapper> */}
      </Container>
    </>
  );
}

const LoginFormLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: ${({ theme }) => theme.color.login_background};
  z-index: 10000;
`;

const Container = styled.div<{ isLoginPopupOpen: boolean }>`
  ${(props) =>
    props.isLoginPopupOpen ? props.theme.mixin.flexCenter() : `display: none;`
    }  
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  height: 515px;
  width: 360px;
  border-radius: 30px;
  z-index: 10000;
  padding: 30px 30px;
  background-color: ${({ theme }) => theme.color.login_background};
`;

const ExitIcon = styled(FontAwesomeIcon)`
  position: absolute;
  cursor: pointer;
  width: 18px;
  height: 18px;
  right: 30px;
  top: 30px;
  color: ${({ theme }) => theme.color.white}; 
`;

const Title = styled.h1`
  ${({ theme }) => theme.mixin.fontSize(24, theme.color.white)};
  width: 67px;
  height: 28px;
  margin-bottom: 20px;
  `;

const InputForm = styled.form`
  border-bottom: 1px solid white;
  width: 300px;
  height: 40px;
  background-color: ${({theme}) => theme.color.transparent};
`

const Description = styled.div`
  ${({ theme }) => theme.mixin.fontSize(15, theme.color.white)};
  align-self: flex-start;
  font-weight: 700;
  height: 18px;
`
const FirstActionWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  height: 30px;
  margin: 40px auto 55px;
`;

const LoginMaintainWrapper = styled.span`
  ${({ theme }) => theme.mixin.flexCenter}
  display: flex;
  flex-direction: row;
`;

const CheckBoxTitle = styled.p`
  ${({ theme }) => theme.mixin.fontSize(16, theme.color.main)}
  margin-left: 8px;
`;

const ButtonGreyContent = styled.span`
  ${({ theme }) => theme.mixin.fontSize(16, theme.color.grey)};
  text-decoration: underline;
  font-weight: 700;
`;

const ButtonWhiteContent = styled.span`
  ${({ theme }) => theme.mixin.fontSize(16, theme.color.light)};
  font-weight: 700;
`;

const SecondActionWrapper = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 48px 0px 65px;
  width: 200px;
`;

const ButtonBlackContent = styled.span`
  ${({ theme }) => theme.mixin.fontSize(16, theme.color.main)};
  text-decoration: underline;
`;

const SimpleLogin = styled.p`
  ${({ theme }) => theme.mixin.fontSize(16, theme.color.grey)};
`;

const OAuthWrapper = styled.span`
  width: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 27px;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

