import styled from "styled-components";

export const Container = styled.div`
  padding: 60px 40px;

  text-align: ${({ textAlign }) => textAlign ?? "center"};

  ${({ height }) => height && `height: ${height}px;`}

  ${({ backgroundImageUrl }) =>
    backgroundImageUrl &&
    `
	background-image: url(${backgroundImageUrl});
	background-position: center;
	background-size: cover;
    `}
`;
