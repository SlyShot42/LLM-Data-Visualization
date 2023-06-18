import React from "react";
import '../styles/tailwind.css';
import TextareaAutosize from 'react-textarea-autosize';


const UserPrompt = () => {
    return (
        <div className='w-full h-fit'>
            <h4>Username:</h4>
            <textarea className='w-full resize-none mt-0 p-2 rounded-xl' minRows='1' placeholder='Enter Prompt'>
            </textarea>
        </div>
    );
};

export default UserPrompt;