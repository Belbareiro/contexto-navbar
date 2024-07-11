import React, { useContext } from 'react';
import { UserContext } from '../Wrapper/Wrapper'
import '../Navbar/Navbar.css'

const Navbar = () => {
    const { userName } = useContext(UserContext);

    return (
        <nav>
            <h1>¡Hola, {userName}!</h1>
        </nav>
    );
};

export default Navbar;