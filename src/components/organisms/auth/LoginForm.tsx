import styled from "styled-components";
import Button from "../../atoms/Button";
import CheckBox from "../../atoms/CheckBox";
import InputForm from "../../atoms/InputForm";
import Spacer from "../../atoms/Spacer";
import Facebook from "/image/btn_facebook.png";
import Instagram from "/image/btn_instagram.png";
import Kakao from "/image/btn_kakao.png";
import Naver from "/image/btn_naver.png";

const LoginForm = () => {
  return (
    <Container>
      <Title>로그인</Title>
      <InputForm
        placeholder="이메일을 입력하세요."
        width="400px"
        height="56px"
      />
      <Spacer size={16} />
      <InputForm
        placeholder="비밀번호를 입력하세요."
        width="400px"
        height="56px"
        type="password"
      />
      <FirstActionWrapper>
        <LoginMaintainWrapper>
          <CheckBox checked={false} />
          <CheckBoxTitle>로그인 유지</CheckBoxTitle>
        </LoginMaintainWrapper>
        <Button backgroundColor="transparent">
          <ButtonGreyContent>비밀번호 찾기</ButtonGreyContent>
        </Button>
      </FirstActionWrapper>
      <Button
        backgroundColor="#000000"
        width="400px"
        height="60px"
        radius="15px"
      >
        <ButtonWhiteContent>이메일로 로그인</ButtonWhiteContent>
      </Button>
      <SecondActionWrapper>
        <Button backgroundColor="transparent">
          <ButtonBlackContent>회원가입</ButtonBlackContent>
        </Button>
        <Button backgroundColor="transparent">
          <ButtonBlackContent>이메일 찾기</ButtonBlackContent>
        </Button>
      </SecondActionWrapper>
      <SimpleLogin>간편로그인</SimpleLogin>
      <OAuthWrapper>
        <Icon src={Naver} />
        <Icon src={Kakao} />
        <Icon src={Facebook} />
        <Icon src={Instagram} />
      </OAuthWrapper>
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.mixin.flexCenter()};
  flex-direction: column;
  position: relative;
  height: 750px;
  width: 500px;
  background-color: ${({ theme }) => theme.color.light};
`;

const Title = styled.h1`
  ${({ theme }) => theme.mixin.fontSize(34, theme.color.main)};
  margin-bottom: 70px;
`;

const FirstActionWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  width: 400px;
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
  font-weight: 700px;
`;

const ButtonWhiteContent = styled.span`
  ${({ theme }) => theme.mixin.fontSize(16, theme.color.light)};
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
  justify-content: space-between;
  margin-top: 27px;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

export default LoginForm;
