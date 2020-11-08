import styled, { css } from 'styled-components';

const dragActive = css`
  color: ${(props) => props.theme.colors.success};
  border-color: ${(props) => props.theme.colors.success};
  background: ${(props) => props.theme.colors.successTransparent};
`;

const dragReject = css`
  color: ${(props) => props.theme.colors.error};
  border-color: ${(props) => props.theme.colors.error};
  background: ${(props) => props.theme.colors.errorTransparent};
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
  transition: height 0.2s ease;
  border-radius: 4px;

  border: 3px dashed ${(props) => props.theme.colors.primaryTransparent};
  color: ${(props) => props.theme.colors.primaryTransparent};

  ${(props) => props.isDragActive && dragActive};
  ${(props) => props.isDragReject && dragReject};
`;

export const UploadMessage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0.5em 0 0 0;
  font-weight: 700;
  letter-spacing: 0.075em;
`;
