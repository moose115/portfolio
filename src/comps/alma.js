import React from 'react';
import styled from 'styled-components';

const School = styled.h3`
margin: 0;
color: var(--dark-silver);
`;
const SchoolYears = styled.h4`
margin: 0;
color: var(--light-gray);
`;

const SchoolDescription = styled.p`
`;

const AlmaMater = () => {
  return (
    <>
      <School>Southern Alberta Institute of Technology</School>
      <SchoolYears>January 2022 - ongoing | Software Development Major</SchoolYears>
      <SchoolDescription></SchoolDescription>
    </>
  );
};

export default AlmaMater;