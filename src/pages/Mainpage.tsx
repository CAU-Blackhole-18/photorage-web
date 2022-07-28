import { useRecoilValue } from "recoil";
import styled from "styled-components";
import LoginForm from "../components/organisms/auth/LoginForm";
import SignupForm from "../components/organisms/auth/SignupForm";
import { loginPopupState, signupPopupState } from "../stores/Auth";
import Button, {ButtonType} from "../components/atoms/Button";

export function Mainpage() {
  const isLoginPopupOpen = useRecoilValue<boolean>(loginPopupState);
  const isSignupPopupOpen = useRecoilValue<boolean>(signupPopupState);

  return (
    <Container>
      <LoginForm isLoginPopupOpen={isLoginPopupOpen} />
      <SignupForm isSignupPopupOpen={isSignupPopupOpen} />
      <Button buttonType={ButtonType.DEFAULT}>가나다라</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;

export default Mainpage;
