import { useState } from "react";
import { useDispatch } from 'react-redux';

import { createTodo } from './TodosSlice';

export default function NewTodoForm (){
    const dispatch = useDispatch();
    const [inputText, setInputText] = useState('');

    return (
        <div>
            <input type="text" 
              value={inputText} 
              onChange={ e => setInputText(e.target.value)} />
              
            <button onClick={() => {
                dispatch( createTodo(inputText) );
                setInputText('');
            }}>Create Todo</button>
        </div>
    );
}