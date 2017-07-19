import React from 'react';

class ConsoleContact extends React.Component {
    render() {
        let basicStyle = 'background: #333; color: #333; font-size: 16px; line-height: 35px; padding: 15px 0;';
        console.log("%c    You found the contact section, well done !     \n    So, now that you're here, here's my email :    \n    [myfirstname]@[thisdomain]                     ", basicStyle);
        return null;
    }
}

export default ConsoleContact;
