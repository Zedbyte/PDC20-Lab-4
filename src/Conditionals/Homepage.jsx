import React from 'react';
import UserGreetings from './UserGreeting';


function Homepage() {

    return (    
        <div>
            <UserGreetings isLoggedIn={true}/>
        </div>
    );
}

export default Homepage;