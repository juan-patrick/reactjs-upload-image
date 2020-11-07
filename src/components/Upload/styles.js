import styled, { css } from 'styled-components';

const dragActive = css`
  color: ${(props) => props.theme.colors.success};
  border-color: ${(props) => props.theme.colors.success};
`;

const dragReject = css`
  color: ${(props) => props.theme.colors.error};
  border-color: ${(props) => props.theme.colors.error};
`;

export const DropContainer = styled.div.attrs({ className: 'dropzone' })`
  border: 1px dashed ${(props) => props.theme.colors.backgroundSecondary};
  border-radius: 4px;

  cursor: pointer;

  transition: height 0.2s ease;

  ${(props) => props.isDragActive && dragActive};
  ${(props) => props.isDragReject && dragReject};
`;

export const UploadMessage = styled.p``;
