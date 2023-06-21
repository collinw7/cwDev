"use client";

import { useEffect, useState } from "react";

const WORDS: string[] = [
  "Hello",
  "Hola",
  "Bonjour",
  "Ciao",
  "Hej",
  "Hallo",
  "Hallå",
  "你好",
  "こんにちは",
  "안녕하세요",
  "Ahoj",
  "Guten tag",
  "Aloha",
  "שלום",
  "नमस्ते",
  "Hei",
  "Jambo",
  "Kamusta",
  "привіт",
  "வணக்கம்",
  "مرحبًا",
  "السلام عليكم",
];

type FadeProp = { fade: "fade-in" | "fade-out" };

const IntroComponent = (): JSX.Element => {
  const [fadeProp, setFadeProp] = useState<FadeProp>({ fade: "fade-in" });
  const [greeting, setGreeting] = useState(0);

  function changeGreeting() {
    setGreeting(greeting > WORDS.length - 2 ? 0 : greeting + 1);
  }
  function changeFade() {
    fadeProp.fade === "fade-in"
      ? setFadeProp({ fade: "fade-out" })
      : setFadeProp({ fade: "fade-in" });
  }

  useEffect(() => {
    setTimeout(changeFade, 1750);
  });

  useEffect(() => {
    setTimeout(changeGreeting, 3500);
  });

  return (
    <div className="mb-20 text-center">
      <h1 id="greeting" className={`inline ${fadeProp.fade}`}>
        {WORDS[greeting]}
      </h1>
    </div>
  );
};

export { IntroComponent };
