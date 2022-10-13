import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <HiddenSelector value={value} onChange={onChange}>
        {children}
      </HiddenSelector>
      <LocalSelector>
        {displayedValue}
        <IconWrapper style={{ "--height": 24 + "px" }}>
          <Icon id={"chevron-down"} strokeWidth={2} size={24}></Icon>
        </IconWrapper>
      </LocalSelector>
    </Wrapper>
  );
};

const HiddenSelector = styled.select`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-appearance: none;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  margin: auto;
  height: var(--height);
  width: var(--height);
  pointer-events: none;
`;

const LocalSelector = styled.div`
  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding: 12px 16px;
  padding-right: 52px;
  border: none;
  border-radius: 8px;

  ${HiddenSelector}:hover + & {
    color: ${COLORS.black};
  }

  ${HiddenSelector}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

export default Select;
