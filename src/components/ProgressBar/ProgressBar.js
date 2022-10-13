/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    height: 8,
    borderRadius: 4,
  },
  medium: {
    height: 12,
    borderRadius: 4,
  },
  large: {
    height: 16,
    borderRadius: 8,
    padding: 4,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper
      style={{
        "--padding": styles.padding + "px",
        "--borderRadius": styles.borderRadius + "px",
      }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <VisuallyHidden>{value}%</VisuallyHidden>{" "}
      <BarWrapper>
        <Bar
          style={{
            "--width": value + "%",
            "--height": styles.height / 16 + "rem",
          }}
        ></Bar>
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  background: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  background: ${COLORS.primary};
  height: var(--height);
  border-radius: 4px 0px 0px 4px;
`;

export default ProgressBar;
