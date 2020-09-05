import React from 'react';
import {useParams} from 'react-router-dom';

const Person = ({person, people}) => {
    const params = useParams();
    
    if (!person) {
        person = people[params.id];
    };
    
    return (
        <div>
            <h2 className="name">{`${person.name.first} ${person.name.last}`}</h2>
            <p className="email">{person.email}</p>
            <p className="role">{person.role}</p>
        </div>
    );
};

export default Person;
