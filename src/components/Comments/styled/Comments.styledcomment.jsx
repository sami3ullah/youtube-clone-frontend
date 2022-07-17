import styled from "styled-components";

export const Container = styled.div``;
export const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;
