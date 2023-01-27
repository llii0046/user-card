import React, { useState } from "react";
import styled from "styled-components";
import { color } from "@/styles/variables";

const { textColor, whiteColor } = color;

interface UserPaginationProps {
  handleSwapPage: (pageNumber: number) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Pagination = styled.button`
  color: ${textColor};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: ${whiteColor};

  &:active {
    background-color: dodgerblue;
    color: ${whiteColor};
  }
`;

const UserPagination: React.FC<UserPaginationProps> = (props) => {
  const [pageNumber, SetPageNumber] = useState<number>();
  const { handleSwapPage } = props;
  return (
    <Container>
      {/* <Pagination>&laquo;</Pagination> */}
      <Pagination onClick={() => handleSwapPage(1)}>1</Pagination>
      <Pagination onClick={() => handleSwapPage(2)}>2</Pagination>
      <Pagination onClick={() => handleSwapPage(3)}>3</Pagination>
      {/* <Pagination >&raquo;</Pagination> */}
    </Container>
  );
};

export default UserPagination;
