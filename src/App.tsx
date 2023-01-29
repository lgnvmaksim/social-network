import React from 'react';
import './App.css';

export const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"
                     alt="image"/>
            </header>
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img src="https://weblinks.ru/wp-content/uploads/2022/08/0d6de7af1701b7f6ff551d4474ced401-730x578.jpeg"
                         alt="background"/>
                </div>
                <div>ava+description</div>
                <div>My post
                    <div>
                        New post
                    </div>
                    <div>post1</div>
                    <div>post2</div>
                </div>

            </div>
        </div>
    );
}
