/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState, useRef } from "react";
import Script from "next/script";
import Cookies from "js-cookie";

export const languages = [
  { label: "English", value: "en", src: "https://flagcdn.com/h60/us.png" },
  { label: "German", value: "de", src: "https://flagcdn.com/h60/de.png" },
  { label: "Spanish", value: "es", src: "https://flagcdn.com/h60/es.png" },
  { label: "French", value: "fr", src: "https://flagcdn.com/h60/fr.png" },
  { label: "Dutch", value: "nl", src: "https://flagcdn.com/h60/nl.png" },
  { label: "Filipino", value: "tl", src: "https://flagcdn.com/h60/ph.png" },
  { label: "Japanese", value: "ja", src: "https://flagcdn.com/h60/jp.png" },
  { label: "Mandarin", value: "zh-CN", src: "https://flagcdn.com/h60/cn.png" },
  { label: "Chinese", value: "zh-TW", src: "https://flagcdn.com/h60/tw.png" },
  { label: "Korean", value: "ko", src: "https://flagcdn.com/h60/kr.png" },
  { label: "Portuguese", value: "pt", src: "https://flagcdn.com/h60/pt.png" },
  { label: "Hindi", value: "hi", src: "https://flagcdn.com/h60/in.png" },
];

export default function GoogleTranslate() {
  const [selected, setSelected] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Load cookie and set default selected language
  useEffect(() => {
    setIsClient(true);
    const cookieValue = Cookies.get("googtrans");
    if (cookieValue) {
      const parts = cookieValue.split("/");
      const target = parts[2];
      const match = languages.find((l) => l.value === target);
      setSelected(match || languages[0]);
    }
  }, []);

  // Initialize Google Translate
  useEffect(() => {
    (window as any).googleTranslateElementInit = () => {
      const google = (window as any).google;
      if (google?.translate) {
        new google.translate.TranslateElement(
          {
            pageLanguage: "auto",
            includedLanguages: languages.map((l) => l.value).join(","),
          },
          "google_translate_element"
        );
      }
    };
  }, []);

  // Update Google Translate hidden dropdown
  useEffect(() => {
    const interval = setInterval(() => {
      const combo = document.querySelector(".goog-te-combo") as
        | HTMLSelectElement
        | null;
      if (combo) {
        combo.value = selected.value;
        combo.dispatchEvent(new Event("change", { bubbles: true }));
        clearInterval(interval);
      }
    }, 500);
  }, [selected]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!isClient) return null;

  return (
    <div
      ref={dropdownRef}
      style={{ width: 150, fontFamily: "Arial, sans-serif", position: "relative" }}
      className="translate-responsive"
    >
      <div id="google_translate_element" style={{ display: "none" }} />

      {/* Custom dropdown */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: "6px 12px",
          borderRadius: 25,
          backgroundColor: "#1B2435",
          color: "white",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 10,
          textAlign: "center",
        }}
      >
        <img src={selected.src} alt={selected.label} style={{ width: 24, height: 16 }} />
        <span>{selected.label}</span>
      </div>

      {isOpen && (
        <ul
          style={{
            position: "absolute",
            top: "110%",
            left: 0,
            width: "100%",
            backgroundColor: "#1B2435",
            borderRadius: 10,
            padding: 0,
            margin: 0,
            listStyle: "none",
            zIndex: 1000,
            maxHeight: 200,
            overflowY: "auto",
          }}
        >
          {languages.map((lang) => (
            <li
              key={lang.value}
              onClick={() => {
                setSelected(lang);
                setIsOpen(false);
              }}
              style={{
                padding: "6px 12px",
                display: "flex",
                alignItems: "center",
                gap: 10,
                cursor: "pointer",
                color: "white",
              }}
            >
              <img src={lang.src} alt={lang.label} style={{ width: 24, height: 16 }} />
              <span>{lang.label}</span>
            </li>
          ))}
        </ul>
      )}

      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  );
}
