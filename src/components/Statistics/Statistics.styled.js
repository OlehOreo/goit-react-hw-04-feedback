import styled from 'styled-components';

export const StatInfo = styled.div`
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;

  min-width: 380px;

  display: flex;
  flex-direction: column;
  color: ${p => p.theme.colors.white};

  gap: ${p => p.theme.spacing(5)};
`;

export const Feedback = styled.span`
  margin-left: 10px;
  color: #babffff5;
`;
