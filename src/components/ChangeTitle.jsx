import { useState, useEffect } from 'react';

const useTitle = () => {
    const [title, setTitle] = useState('Home');
    console.log(title);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerHTML = title;
    };
    useEffect(updateTitle, [title]);

    return setTitle;
};

export default useTitle;
