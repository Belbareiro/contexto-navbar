import React, { useContext } from 'react';
import { UserContext } from '../Wrapper/Wrapper';
import '../Form/Form.css'

const Form = () => {
    const { userName, setUserName } = useContext(UserContext);

    const handleNameChange = (e) => {
        setUserName(e.target.value);
    };

    return (
        <div>
            <label htmlFor="userName">Nombre de usuario:</label>
            <input
                type="text"
                id="userName"
                value={userName}
                onChange={handleNameChange}
            />
        </div>
    );
};

export default Form;