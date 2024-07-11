import React, { useState, createContext } from 'react';

export const UserContext = createContext();

const Wrapper = ({ children }) => {
    const [userName, setUserName] = useState('John Doe');

    return (
        <UserContext.Provider value={{ userName, setUserName }}>
            {children}
        </UserContext.Provider>
    );
};

export default Wrapper;