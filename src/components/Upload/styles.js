import styled, { css, keyframes } from 'styled-components';

const errorAnimation = keyframes`  
    0%,
    50% {
      transform: rotate(-3deg);
    }

    25%,
    75% {
      transform: rotate(3deg);
    }

    100% {
      transform: rotate(0deg);
    }  
`;

const dragActive = css`
  color: ${(props) => props.theme.colors.success};
  border-color: ${(props) => props.theme.colors.success};
  background: ${(props) => props.theme.colors.successTransparent};
`;

const dragReject = css`
  color: ${(props) => props.theme.colors.error};
  border-color: ${(props) => props.theme.colors.error};
  background: ${(props) => props.theme.colors.errorTransparent};
  animation: ${errorAnimation} 0.3s linear;
`;

export const DropContainer = styled.div.attrs({ className: 'dropzone' })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 15px 30px;

  cursor: pointer;

  border-radius: 4px;

  border: 3px dashed ${(props) => props.theme.colors.primaryTransparent};
  color: ${(props) => props.theme.colors.primaryTransparent};

  &:hover {
    background: ${(props) => props.theme.colors.backgroundPrimaryTransparent};
  }

  ${(props) => props.isDragActive && dragActive};
  ${(props) => props.isDragReject && dragReject};

  & img {
    width: 64px;
    height: 64px;
    margin: 0 0 10px 0;
  }

  & svg {
    margin: 0 0 10px 0;
  }
`;

export const UploadMessage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0.5em 0 0 0;
  font-weight: 700;
  letter-spacing: 0.04em;
`;
