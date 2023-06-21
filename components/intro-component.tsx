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

  useEffect(() => {
    const changeFade = setInterval(() => {
      fadeProp.fade === "fade-in"
        ? setFadeProp({ fade: "fade-out" })
        : setFadeProp({ fade: "fade-in" });
    }, 1750);
    return () => clearInterval(changeFade);
  }, [fadeProp]);

  useEffect(() => {
    const changeGreeting = setInterval(() => {
      setGreeting(greeting > WORDS.length - 2 ? 0 : greeting + 1);
    }, 3500);
    return () => clearInterval(changeGreeting);
  }, [greeting]);

  return (
    <div className="mb-20 text-center">
      <h1 id="greeting" className={`inline ${fadeProp.fade}`}>
        {WORDS[greeting]}
      </h1>
    </div>
  );
};

export { IntroComponent };
