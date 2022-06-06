import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import Button from "../../atoms/Button";
import InputForm from "../../atoms/InputForm";
import Spacer from "../../atoms/Spacer";
import Terms from "../../molecules/Terms";

const SignupForm = () => {
  const [allTermChecked, setAllTermChecked] = useState(false);
  const [firstTermChecked, setFirstTermChecked] = useState(false);
  const [secondTermChecked, setSecondTermChecked] = useState(false);
  const [thirdTermChecked, setThirdTermChecked] = useState(false);
  const [lastTermChecked, setLastTermChecked] = useState(false);

  return (
    <Container>
      <ExitIcon icon={faXmark} />
      <Title>회원가입</Title>
      <SubTitle>회원가입을 위해 인증 가능한 이메일을 입력해 주세요.</SubTitle>
      <form>
        <InputForm
          placeholder="이메일을 입력하세요."
          width="400px"
          height="56px"
          tabIndex={1}
        />
        <Spacer size={16} />
        <InputForm
          placeholder="비밀번호를 입력하세요."
          width="400px"
          height="56px"
          type="password"
          autoComplete={"off"}
          tabIndex={2}
        />
      </form>
      <Spacer size={45} />
      <Terms
        onChange={() => setAllTermChecked((prev) => !prev)}
        checked={allTermChecked}
        termTitle={"모두 동의합니다."}
        strong={true}
      />
      <SubTermsWrapper>
        <TermDescription>
          본인은 만 14세 이상이며 Photorage 이용약관, 개인 정보 수집 및 이용,
          본인확인 정보 수집 및 저장(선택)을 확인하였으며 모두 동의합니다.
        </TermDescription>
        <Terms
          onChange={() => setFirstTermChecked((prev) => !prev)}
          checked={firstTermChecked}
          termTitle={"만 14세 이상입니다. (필수)"}
          contentOpenButton={true}
          width={"360px"}
        />
        <Spacer size={16} />
        <Terms
          onChange={() => setSecondTermChecked((prev) => !prev)}
          checked={secondTermChecked}
          termTitle={"이용약관 (필수)"}
          contentOpenButton={true}
          width={"360px"}
        />
        <Spacer size={16} />
        <Terms
          onChange={() => setThirdTermChecked((prev) => !prev)}
          checked={thirdTermChecked}
          termTitle={"개인정보 수집 및 이용 (필수)"}
          contentOpenButton={true}
          width={"360px"}
        />
        <Spacer size={16} />
        <Terms
          onChange={() => setLastTermChecked((prev) => !prev)}
          checked={lastTermChecked}
          termTitle={"본인확인 정보 수집 및 저장 (선택)"}
          width={"360px"}
        />
      </SubTermsWrapper>
      <Button
        backgroundColor="#000000"
        width="400px"
        height="60px"
        radius="15px"
      >
        <ButtonLightContent>가입하기</ButtonLightContent>
      </Button>
      <LoginConnectSection>
        <LoginConnectInfo>이미 회원이신가요?</LoginConnectInfo>
        <Button backgroundColor="transparent">
          <ButtonBlackContent>로그인</ButtonBlackContent>
        </Button>
      </LoginConnectSection>
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.mixin.flexCenter()};
  flex-direction: column;
  position: relative;
  height: 750px;
  width: 500px;
  z-index: 10000;
  background-color: ${({ theme }) => theme.color.light};
`;

const ExitIcon = styled(FontAwesomeIcon)`
  position: absolute;
  cursor: pointer;
  width: 32px;
  height: 32px;
  right: 10px;
  top: 10px;
`;

const Title = styled.h1`
  ${({ theme }) => theme.mixin.fontSize(34, theme.color.main)};
  margin-bottom: 6px;
  font-weight: 700;
`;

const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.mixin.fontSize(13, theme.color.main)};
  max-width: 200px;
  text-align: center;
  margin-bottom: 16px;
`;

const SubTermsWrapper = styled.span`
  max-width: 360px;
  margin: 12px 0px 21px 20px;
`;

const TermDescription = styled.p`
  font-size: ${({ theme }) => theme.mixin.fontSize(13, theme.color.grey)};
  margin-bottom: 23px;
`;

const ButtonLightContent = styled.span`
  ${({ theme }) => theme.mixin.fontSize(16, theme.color.light)};
  font-weight: 700;
`;

const LoginConnectSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  border-top: 2px solid ${({ theme }) => theme.color.main};
  margin-top: 56px;
  padding-top: 8px;
`;

const LoginConnectInfo = styled.p`
  ${({ theme }) => theme.mixin.fontSize(10, theme.color.grey)};
`;

const ButtonBlackContent = styled.span`
  ${({ theme }) => theme.mixin.fontSize(10, theme.color.main)};
  text-decoration: underline;
`;

export default SignupForm;
