import { axiosInstance } from "../../axiosInstance";
import { useMutation, UseMutateFunction } from "react-query";

type SignupPropsType = {
  inputEmail: string;
  inputPassword: string;
  inputName: string;
  inputNickname: string;
};

type SignupReturnType = {
  id: string;
  email: string;
  name: string;
};

const signup = async (
  props: SignupPropsType
): Promise<SignupReturnType | null> => {
  const { inputEmail, inputPassword, inputName, inputNickname } = props;

  if (!inputEmail || !inputPassword || !inputName || !inputNickname) {
    console.log("에러 발생");
    return null;
  }

  const { data } = await axiosInstance.post(`/auth/sign-up`, {
    inputEmail,
    inputPassword,
    inputName,
    inputNickname,
  });

  return data;
};

export const useSignup = (): UseMutateFunction<
  SignupReturnType | null,
  unknown,
  SignupPropsType,
  unknown
> => {
  const { mutate: signupAction } = useMutation(
    (props: SignupPropsType) => signup(props),
    {
      onSuccess: () => console.log("성공"),
      onError: () => console.log("실패"),
    }
  );
  return signupAction;
};
