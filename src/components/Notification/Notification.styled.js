import styled from 'styled-components';

export const NoInfo = styled.p`
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;

  min-width: 380px;
  color: ${p => p.theme.colors.white};

  display: flex;
  flex-direction: column;

  gap: ${p => p.theme.spacing(5)};
`;
