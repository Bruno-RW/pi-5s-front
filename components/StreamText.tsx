// components/StreamText.tsx
"use client";

import { useState } from "react";

export default function StreamText() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleStream = async () => {
    setText("");
    setLoading(true);
    
    const response = await fetch("http://localhost:8000/message");
    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    if (!reader) return;

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      setText((prev) => prev + chunk);
    }

    setLoading(false);
  };

  return (
    <div className="p-4">
      <button 
        onClick={handleStream} 
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Loading..." : "Start Streaming"}
      </button>
      <pre className="mt-4 whitespace-pre-wrap">{text}</pre>
    </div>
  );
}
