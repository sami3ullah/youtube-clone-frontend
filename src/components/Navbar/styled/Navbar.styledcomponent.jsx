import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;
export const Search = styled.div`
  position: absolute;
  width: 40%;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
`;
export const Input = styled.input`
  border: none;
  background: transparent;
`;
