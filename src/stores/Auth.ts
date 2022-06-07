import { atom } from "recoil";

export const loginPopupState = atom<boolean>({
  key: "loginPopupState",
  default: false,
});

export const signupPopupState = atom<boolean>({
  key: "signupPopupState",
  default: false,
});
