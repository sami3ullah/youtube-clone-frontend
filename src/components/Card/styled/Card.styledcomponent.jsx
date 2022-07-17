import styled from "styled-components";

export const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 100%;
  height: 202px;
  background: #999;
`;

export const Details = styled.div`
  display: flex;
  margin: 16px;
  gap: 12px;
`;

export const ChannelImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #999;
`;

export const Texts = styled.div``;
export const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
export const ChannelName = styled.h2`
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;
export const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;
