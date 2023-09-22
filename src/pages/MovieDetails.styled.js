import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: block;
  padding-left: 20px;
  margin-bottom: 10px;
  text-decoration: none;
  color: blue;
  font-weight: 500;

  &.active {
    color: orangered;
  }
`;
export const Wrapper = styled.div`
  margin-top: 10px;
  display: flex;

  > img {
    margin-right: 15px;
  }
`;
export const WrapperIformation = styled.div`
  margin-top: 10px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  padding: 5px;

  > p {
    margin-bottom: 10px;
    font-weight: 500;
  }
`;

export const Btn = styled.button`
  color: black;
  background-color: tomato;
  padding: 3px 8px 3px 8px;
  border-radius: 100px 1px 1px 100px;
  font: inherit;
`;
export const LinkBack = styled(NavLink)`
  display: block;
`;
