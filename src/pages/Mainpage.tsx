import { useRecoilValue } from "recoil";
import styled from "styled-components";
import LoginForm from "../components/organisms/auth/LoginForm";
import SignupForm from "../components/organisms/auth/SignupForm";
import { loginPopupState, signupPopupState } from "../stores/Auth";

export function Mainpage() {
  const isLoginPopupOpen = useRecoilValue<boolean>(loginPopupState);
  const isSignupPopupOpen = useRecoilValue<boolean>(signupPopupState);

  return (
    <Container>
      <LoginForm isLoginPopupOpen={isLoginPopupOpen} />
      <SignupForm isSignupPopupOpen={isSignupPopupOpen} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;

export default Mainpage;
