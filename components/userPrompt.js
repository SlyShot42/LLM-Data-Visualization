import React from "react";
import '../styles/tailwind.css';
import TextareaAutosize from 'react-textarea-autosize';


const UserPrompt = () => {
    return (
        <div className='flex flex-col w-full max-h-full overflow-auto'>
            <h4 className='bold'>Username:</h4>
            <TextareaAutosize className='w-full resize-none mt-0 p-2 rounded-xl ' minRows='1' placeholder='Enter Prompt'/>
        </div>
    );
};

export default UserPrompt;