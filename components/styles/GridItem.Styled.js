import styled from "styled-components";

export const GridItem = styled.div`
  ${({ startColumn, span }) =>
    (startColumn || span) &&
    `grid-column: ${startColumn ?? "auto"} / ${
      span ? `span ${span}` : "auto"
    };`}
`;
