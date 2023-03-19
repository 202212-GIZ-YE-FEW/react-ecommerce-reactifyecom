import styled from "@emotion/styled";

export const TableLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 30px;
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
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
`;
export const TabRow = styled.div`
  display: grid;
  padding: 1px;
  position: relative;
  grid-template-columns: 1.5fr 1.3fr;
  width: 100%;
  border-bottom: 1px solid #e5e7eb;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
export const TabHeader = styled.div`
  display: grid;
  padding: 1px;
  grid-auto-columns: 1fr;
  grid-template-columns: 1.5fr 0.8fr 0.9fr 1fr 0.7fr;
  width: 100%;
  border-bottom: 1px solid #e5e7eb;
`;
export const ItemCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImageTitle = styled.div`
  padding: 18px 20px 18px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #e5e7eb;
  min-width: 100px;
  padding: 7px;
  margin: 20px;
`;

export const QuantitiyDiv = styled.div`
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
