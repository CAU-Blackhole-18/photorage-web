import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import CheckBox from "../atoms/CheckBox";

type TermsPropsType = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  width?: string;
  termTitle: string;
  strong?: boolean;
  contentOpenButton?: boolean;
};

const Terms = (props: TermsPropsType) => {
  const { checked, width, termTitle, strong, contentOpenButton, onChange } =
    props;

  return (
    <Container width={width}>
      <TitleWrapper>
        <CheckBox checked={checked} onChange={onChange} />
        <Title strong={strong}>{termTitle}</Title>
      </TitleWrapper>
      {contentOpenButton && (
        <Button backgroundColor="transparent">
          <ButtonContent>내용보기</ButtonContent>
        </Button>
      )}
    </Container>
  );
};

const Container = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: ${(props) => props.width || "400px"};
  height: 32px;
`;

const TitleWrapper = styled.span`
  flex-direction: row;
  ${({ theme }) => theme.mixin.flexCenter()}
`;

const Title = styled.p<{ strong?: boolean }>`
  margin-left: 7px;
  ${(props) =>
    props.theme.mixin.fontSize(props.strong ? 16 : 14, props.theme.color.main)}
  font-weight: 700;
`;

const ButtonContent = styled.span`
  ${({ theme }) => theme.mixin.fontSize(14, theme.color.grey)};
  text-decoration: underline;
  font-weight: 700;
`;

export default Terms;
