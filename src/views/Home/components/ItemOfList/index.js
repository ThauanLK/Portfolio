import styled from "styled-components";

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: blue;
`;

export const Item = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  background-color: red;
  border-radius: 25px;
`;

export const LineList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;
