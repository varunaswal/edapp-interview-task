import styled from "styled-components";

export const Blockquote = styled.blockquote`
  font-size: 20px;

  &:before {
    position: absolute;
    content: "“";
    font-size: 120px;
    top: 0;
    line-height: 0.9;
    font-weight: 300;
    vertical-align: middle;
    left: -60px;
    color: #e6ebf0;
  }
`;
