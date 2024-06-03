"use client";
import { useState } from "react";
import Words from "./_compornent/Words";
import wordList from "./_compornent/wordslist";

export default function Home() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");
  const [example, setExample] = useState("");
  const addWord = () => {
    wordList.push({ word: word, meaning: meaning, example: example });
    setWord("");
    setMeaning("");
    setExample("");
  }
  return (

    <div>
      <h1>My Words</h1>
      <input type="text" value={word} onChange={(e) => setWord(e.target.value)} placeholder="Word" />
      <input type="text" value={meaning} onChange={(e) => setMeaning(e.target.value)} placeholder="Meaning" />
      <input type="text" value={example} onChange={(e) => setExample(e.target.value)} placeholder="Example" />
      <button onClick={addWord}>add word</button>
      <button>random</button>
      <Words data={wordList} />
    </div>
  );
}