import React from 'react';
import styled from 'styled-components';

const H3 = styled.h3`
  text-align: center;
  width: 100%;
`;

const Header = ({ title }) => <H3>{title}</H3>;

export default Header;
