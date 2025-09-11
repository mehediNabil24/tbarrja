"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";
import Cookies from "js-cookie";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (options: object, container: string) => void;
      };
    };
  }
}

// ✅ Language list with flags
export const languages = [
  { label: "English", value: "en", src: "https://flagcdn.com/h60/us.png" },
  { label: "Filipino", value: "tl", src: "https://flagcdn.com/h60/ph.png" },
  { label: "Japanese", value: "ja", src: "https://flagcdn.com/h60/jp.png" },
  { label: "Mandarin", value: "zh-CN", src: "https://flagcdn.com/h60/cn.png" },
  { label: "Chinese", value: "zh-TW", src: "https://flagcdn.com/h60/tw.png" },
  { label: "Korean", value: "ko", src: "https://flagcdn.com/h60/kr.png" },
  { label: "Portuguese", value: "pt", src: "https://flagcdn.com/h60/pt.png" },
  { label: "Hindi", value: "hi", src: "https://flagcdn.com/h60/in.png" },
];

export default function GoogleTranslate() {
  const [selected, setSelected] = useState("en");
  const [isClient, setIsClient] = useState(false);

  // Load saved language from cookie
  useEffect(() => {
    setIsClient(true);
    const cookieValue = Cookies.get("googtrans");
    if (cookieValue) {
      const parts = cookieValue.split("/");
      const target = parts[2];
      const match = languages.find((l) => l.value === target);
      if (match) setSelected(match.value);
    }
  }, []);

  // Initialize Google Translate
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google?.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "auto",
            includedLanguages: languages.map((l) => l.value).join(","),
          },
          "google_translate_element"
        );
      }
    };
  }, []);

  // Apply selected language to Google Translate combo
  useEffect(() => {
    const interval = setInterval(() => {
      const combo = document.querySelector(".goog-te-combo") as
        | HTMLSelectElement
        | null;
      if (combo) {
        combo.value = selected;
        combo.dispatchEvent(new Event("change", { bubbles: true }));
        clearInterval(interval);
      }
    }, 500);
  }, [selected]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
  };

  if (!isClient) return null; // Prevent hydration mismatch

  return (
    <div style={{ width: "100%", fontFamily: "Arial, sans-serif" }}>
      {/* Hidden Google Translate element */}
      <div id="google_translate_element" style={{ display: "none" }} />

      {/* Custom dropdown */}
      <select
        id="language-select"
        value={selected}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "6px 8px",
          borderRadius: 25,
          border: "1px solid #ccc",
          appearance: "none",
          backgroundColor: "#1B2435",
          backgroundImage: `
            url(${languages.find((l) => l.value === selected)?.src}),
            linear-gradient(45deg, transparent 50%, gray 50%), 
            linear-gradient(135deg, gray 50%, transparent 50%)
          `,
          backgroundRepeat: "no-repeat, no-repeat, no-repeat",
          backgroundPosition:
            "5px center, calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px)",
          backgroundSize: "24px 16px, 5px 5px, 5px 5px",
          paddingLeft: 34,
          cursor: "pointer",
          color: "white",
        }}
      >
        {languages.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>

      {/* Load Google Translate script */}
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  );
}
