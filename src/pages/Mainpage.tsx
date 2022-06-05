import { useRecoilValue } from "recoil";
import styled from "styled-components";
import LoginForm from "../components/organisms/auth/LoginForm";
import { loginPopupState } from "../stores/Auth";

export function Mainpage() {
  const isLoginPopupOpen = useRecoilValue<boolean>(loginPopupState);

  return (
    <Container>
      <LoginForm isLoginPopupOpen={isLoginPopupOpen} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export default Mainpage;
