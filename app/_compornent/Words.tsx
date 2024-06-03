"use client"
import { useState } from "react";

const Words = (props: any) => {

    const wordList = props.data;
    const [showMeaning, setShowMeaning] = useState(Array(wordList.length).fill(false));

    const handleClick = (index: any) => {
        setShowMeaning((prev: any) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <div>
            {wordList.map((word: any, index: any) => (
                <div key={index}>
                    <input type="checkbox" />
                    <div onClick={() => handleClick(index)}>
                        <h2>{word.word}</h2>
                        <p>{word.example}</p>
                        {showMeaning[index] && (<p>{word.meaning}</p>)}
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Words;