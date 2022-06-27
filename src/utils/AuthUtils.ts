export const checkEmailValidation = (userInput: string) => {
  const emailCheckRegex = /\S+@\S+\.\S+/;
  return userInput && emailCheckRegex.test(userInput);
};

export const checkPasswordValidation = (passwordInput: string) => {
  const passwordCheckRegex =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,}$/;
  return passwordInput && passwordCheckRegex.test(passwordInput);
};
