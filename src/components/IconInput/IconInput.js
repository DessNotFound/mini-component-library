import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styled = SIZES[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--iconSize": styled.iconSize + "px" }}>
        <Icon
          id={icon}
          size={styled.iconSize}
          strokeWidth={styled.strokeWidth}
        ></Icon>
      </IconWrapper>
      <TextInput
        placeholder={placeholder}
        style={{
          "--fontSize": styled.fontSize / 16 + "rem",
          "--width": width + "px",
          "--borderThickness": styled.borderThickness + "px",
          "--height": styled.height / 16 + "rem",
        }}
      />
    </Wrapper>
  );
};

const TextInput = styled.input`
  border: none;
  border-bottom: var(--borderThickness) solid ${COLORS.black};
  font-size: var(--fontSize);
  webkit-appearance: none;
  width: var(--width);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;
  height: var(--height);
  padding-left: var(--height);

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0; 
  left: 0; 
  bottom: 0; 
  margin auto 0; 
  height: var(--iconSize);
`;

const Wrapper = styled.label`
  display: block;
  position: relative;
  width: max-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
