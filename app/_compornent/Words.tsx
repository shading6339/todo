"use client"
import { useState } from "react";

const Words = (props: any) => {

    const wordList = props.data;
    const [showExample, setShowExample] = useState(false);

    const handleClick = () => {
        setShowExample(!showExample);
    };
    return (
        <div>
            {wordList.map((word: any) => (
                <div onClick={handleClick}>
                    <h2>{word.word}</h2>
                    <p>{word.example}</p>
                    {showExample && (<p>{word.meaning}</p>)}
                </div>
            ))}
        </div>
    );
}
export default Words;