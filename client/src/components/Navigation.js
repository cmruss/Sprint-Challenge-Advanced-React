import React from 'react';
import {useDarkMode} from '../hooks/useDarkMode';

const Navigation = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);

    const toggleMode = event => {
        event.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <nav className='navigation'>
            <h1>Women's World Cup</h1>
            <div className='dark-mode-switch'>
    <button data-testid='dark-mode-button' onClick={toggleMode} >{darkMode ? 'go light' : 'go dark'}</button>
            </div>
        </nav>
    )
}

export default Navigation;