import styled from 'styled-components';

export const BtnFeedback = styled.button`
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  letter-spacing: 0.0275rem;
  margin-bottom: 40px;

  width: 200px;

  text-align: center;
  text-decoration: none;
  outline: none;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.bgBtn};
  border: none;
  border-radius: 15px;

  &:hover {
    background-color: #2468ca;
  }

  &:active {
    transform: translateY(4px);
  }
`;

export const WrapperBtn = styled.div`
  display: flex;
  gap: 30px;
`;
