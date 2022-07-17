import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 40px 0;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

export const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;
export const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;
export const Text = styled.span`
  font-size: 14px;
`;
