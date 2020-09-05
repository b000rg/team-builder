import React from 'react';
import styled from 'styled-components';
import Person from './Person';

const StyledList = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const PeopleList = ({people}) => {
    return (
        people.map((person, i) => <Person key={i} person={person} />)
    );
};

export default PeopleList;
