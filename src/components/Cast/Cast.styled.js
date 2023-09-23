import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  column-gap: 5px;
  /* gap: 5px; */
  > li {
    margin-bottom: 20px;
    width: 180px;
  }
`;
