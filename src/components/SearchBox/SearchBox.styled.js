import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 5px 32px 5px 8px;
  border-radius: 4px;
  font: inherit;
  border: 1px solid lightcoral;
  margin-right: 2px;
  transition: box-shadow 0.3s ease;
  outline: none;

  &:hover {
    box-shadow: 1px 0px 8px tomato;
  }
`;

export const Btn = styled.button`
  color: white;
  border: none;
  background-color: tomato;
  padding: 7px 8px 7px 8px;
  border-radius: 4px;
  font: inherit;
  cursor: pointer;
  transition: color 0.3s ease;
  box-shadow: tomato;

  &:hover {
    color: black;
  }
`;
