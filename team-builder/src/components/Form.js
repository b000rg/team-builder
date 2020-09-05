import React, {useState} from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
`;

const Form = ({list, setList}) => {
    const defaultData = {name: '', email: '', role: ''};
    const [formData, setFormData] = useState({...defaultData});

    const handleChange = event => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();
        let newPerson = {name: formData.name, email: formData.email, role: formData.role};
        setList([...list, newPerson]);
        setFormData({...defaultData});
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <input name="name" type="text" onChange={handleChange} value={formData.name} />
            <input name="email" type="text" onChange={handleChange} value={formData.email} />
            <input name="role" type="text" onChange={handleChange} value={formData.role} />
            <button>Submit</button>
        </StyledForm>
    )
}

export default Form;
