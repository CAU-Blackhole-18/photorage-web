import styled from "styled-components";
import InputForm from "../../atoms/InputForm";
import Spacer from "../../atoms/Spacer";

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
  margin-bottom: 85px;
`;

export default LoginForm;
