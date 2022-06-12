import React from 'react';
import styled from 'styled-components';



export type CheckBoxTypes = {
  isChecked: boolean;
  children?: React.ReactNode;
  isPrivateOnClick: (isPrivate: boolean) => void;
  isPrivate: boolean;
};



const StyledChoiceText = styled.p`
  margin: 0;
  padding: 0 0 0 6px;
  color: #808080;
  font-size: 14px;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function CheckBox({ isChecked = false, children, isPrivateOnClick, isPrivate }: CheckBoxTypes) {
  return (
    <CheckBoxWrapper>
      <StyledCheckBox
        isChecked={isChecked}
        onClick={() => {
          isPrivateOnClick(isPrivate);
        }}
      />
      <StyledChoiceText>{children}</StyledChoiceText>
    </CheckBoxWrapper>
  );
}

export default CheckBox;
