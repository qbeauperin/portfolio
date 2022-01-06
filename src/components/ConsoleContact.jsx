import React, { useEffect } from 'react';

function ConsoleContact () {
    useEffect(() => {
        let basicStyle = 'font-size: 16px; line-height: 35px; padding: 15px 0;';
        let lines = [
            "You found the contact section, well done!",
            "Now that you're here, here's my email:",
            "[myfirstname]@[domain]"
        ];
        let result = "%c\n";
        lines.forEach((line) => {
            result += "     " + line + "\n"
        });
        console.log(result, basicStyle);
    }, [])

    return null;
}

export default ConsoleContact;
