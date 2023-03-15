import styled from "@emotion/styled";

export const TableLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  // max-width: 80%;
  // padding: 60px;
  // background-color: yellow;

  // @media only screen and (max-width: 600px) {
  //   width: 500px;
  //   padding: 60px;
  // }
`;

export const TableDiv = styled.div`
  // background-color: purple;
  width: 69%;
  display: inherit;
  flex-direction: inherit;
  align-items: center;
  border: 1px solid #e5e7eb;

  &:last-child {
    border: 0;
  }
`;
export const TableHeader = styled.div`
  // padding: 20px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
  // border-bottom: inherit;
  // width: 100%;
`;
export const TabRow = styled.div`
  display: grid;
  padding: 1px;
  grid-auto-columns: 1fr;
  grid-template-columns: 1.5fr 0.8fr 0.9fr 1fr 0.7fr;
  width: 100%;
  border: 1px solid #e5e7eb;
`;
export const ItemCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImageTitle = styled.div`
  padding: 18px 20px 18px 20px;
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  gap: 0px 13px;

  @media only screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 13px;
  }
`;

export const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #e5e7eb;
  padding: 7px;
`;

export const QuantitiyDiv = styled.div`
// border:1px solid #e5e7eb;
text-align: center;
height: 40px;
display: flex;
gap: gap: 0px 13px; 
`;

export const ButtonsDiv = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: start;
`;
