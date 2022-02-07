import styled from "styled-components";
import { Container } from "./Container.Styled";

export const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
