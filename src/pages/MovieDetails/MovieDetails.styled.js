import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: block;
  padding-left: 20px;
  margin-bottom: 10px;
  text-decoration: none;
  color: tomato;
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

export const LinkBack = styled(NavLink)`
  align-items: bas;
  font-size: 15px;
  padding: 3px 20px;
  margin-bottom: 10px;
  text-decoration: none;
  color: tomato;

  font-weight: 500;

  > b {
    display: flex;
    font-size: 23px;
  }
`;
