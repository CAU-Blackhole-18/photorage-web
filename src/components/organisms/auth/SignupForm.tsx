import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { useSignup } from "../../../hooks/auth/useSignup";
import { loginPopupState, signupPopupState } from "../../../stores/Auth";
import Button from "../../atoms/Button";
import InputForm from "../../atoms/InputForm";
import Spacer from "../../atoms/Spacer";
import Terms from "../../molecules/Terms";
import { toast } from "react-toastify";
import {
  checkEmailValidation,
  checkPasswordValidation,
} from "../../../utils/AuthUtils";

type SignupFormPropsType = {
  isSignupPopupOpen: boolean;
};

const SignupForm = (props: SignupFormPropsType) => {
  const { isSignupPopupOpen } = props;
  const signupAction = useSignup();

  const [checkList, setCheckList] = useState<number[]>([]);
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");
  const [inputName, setInputName] = useState<string>("");
  const [inputNickname, setInputNickname] = useState<string>("");

  const [signupPopupOpen, setSignupPopupOpen] =
    useRecoilState<boolean>(signupPopupState);
  const setLoginPopupOpen = useSetRecoilState(loginPopupState);

  const signupPopupRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (signupPopupOpen) {
      signupPopupRef.current.focus();
    }
  }, [signupPopupOpen]);

  const handleCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCheckList([1, 2, 3, 4]);
    } else {
      setCheckList([]);
    }
  };

  const handleCheckEach = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    if (e.target.checked) {
      setCheckList([...checkList, id]);
    } else {
      setCheckList(checkList.filter((elem) => elem !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputEmail || !inputPassword || !inputName || !inputNickname) {
      toast.error("?????????????????? ??????????????????.");
      return null;
    }

    if (!checkEmailValidation(inputEmail)) {
      toast.error("???????????? ?????? ????????? ???????????????.");
      return;
    }

    if (!checkPasswordValidation(inputPassword)) {
      toast.error("???????????? ?????? ???????????? ???????????????.");
      return;
    }

    if (
      !checkList.includes(1) ||
      !checkList.includes(2) ||
      !checkList.includes(3)
    ) {
      toast.error("?????? ????????? ??????????????????.");
      return;
    }

    signupAction({
      inputEmail,
      inputPassword,
      inputName,
      inputNickname,
    });
  };

  return (
    <>
      {signupPopupOpen && <SignupFormLayout />}
      <Container
        ref={signupPopupRef}
        onBlur={(e: React.FocusEvent) => {
          !e.currentTarget.contains(e.relatedTarget) &&
            setSignupPopupOpen(false);
        }}
        tabIndex={-1}
        isSignupPopupOpen={isSignupPopupOpen}
      >
        <ExitIcon icon={faXmark} onClick={() => setSignupPopupOpen(false)} />
        <Title>????????????</Title>
        <SubTitle>??????????????? ?????? ?????? ????????? ???????????? ????????? ?????????.</SubTitle>
        <form onSubmit={handleSubmit}>
          <InputForm
            placeholder="???????????? ???????????????."
            width="400px"
            height="56px"
            tabIndex={1}
            value={inputEmail}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputEmail(e.target.value)
            }
          />
          <Spacer size={16} />
          <InputForm
            placeholder="??????????????? ???????????????."
            width="400px"
            height="56px"
            type="password"
            autoComplete={"off"}
            tabIndex={2}
            value={inputPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputPassword(e.target.value)
            }
          />
          <Spacer size={16} />
          <InputForm
            placeholder="????????? ???????????????."
            width="400px"
            height="56px"
            tabIndex={3}
            value={inputName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputName(e.target.value)
            }
          />
          <Spacer size={16} />
          <InputForm
            placeholder="???????????? ???????????????."
            width="400px"
            height="56px"
            tabIndex={4}
            value={inputNickname}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputNickname(e.target.value)
            }
          />
          <Spacer size={30} />
          <Terms
            onChange={handleCheckAll}
            checked={
              checkList.length === 0
                ? false
                : checkList.length === 4
                ? true
                : false
            }
            termTitle={"?????? ???????????????."}
            strong={true}
          />
          <SubTermsWrapper>
            <TermDescription>
              ????????? ??? 14??? ???????????? Photorage ????????????, ?????? ?????? ?????? ???
              ??????, ???????????? ?????? ?????? ??? ??????(??????)??? ?????????????????? ??????
              ???????????????.
            </TermDescription>
            <Terms
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleCheckEach(e, 1)
              }
              checked={checkList.includes(1)}
              termTitle={"??? 14??? ???????????????. (??????)"}
              contentOpenButton={true}
              width={"360px"}
            />
            <Spacer size={16} />
            <Terms
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleCheckEach(e, 2)
              }
              checked={checkList.includes(2)}
              termTitle={"???????????? (??????)"}
              contentOpenButton={true}
              width={"360px"}
            />
            <Spacer size={16} />
            <Terms
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleCheckEach(e, 3)
              }
              checked={checkList.includes(3) ? true : false}
              termTitle={"???????????? ?????? ??? ?????? (??????)"}
              contentOpenButton={true}
              width={"360px"}
            />
            <Spacer size={16} />
            <Terms
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleCheckEach(e, 4)
              }
              checked={checkList.includes(4) ? true : false}
              termTitle={"???????????? ?????? ?????? ??? ?????? (??????)"}
              width={"360px"}
            />
            <Spacer size={16} />
          </SubTermsWrapper>
          <Button
            backgroundColor="#000000"
            width="400px"
            height="60px"
            radius="15px"
            type="submit"
          >
            <ButtonLightContent>????????????</ButtonLightContent>
          </Button>
        </form>
        <LoginConnectSection>
          <LoginConnectInfo>?????? ???????????????????</LoginConnectInfo>
          <Button
            onClick={() => setLoginPopupOpen(true)}
            backgroundColor="transparent"
          >
            <ButtonBlackContent>?????????</ButtonBlackContent>
          </Button>
        </LoginConnectSection>
      </Container>
    </>
  );
};

const SignupFormLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: ${({ theme }) => theme.color.background};
  z-index: 9999;
`;

const Container = styled.div<{ isSignupPopupOpen: boolean }>`
  ${(props) =>
    props.isSignupPopupOpen ? props.theme.mixin.flexCenter() : `display: none;`}
  flex-direction: column;
  position: relative;
  width: 500px;
  z-index: 10000;
  background-color: ${({ theme }) => theme.color.light};
  padding: 40px 50px;
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
