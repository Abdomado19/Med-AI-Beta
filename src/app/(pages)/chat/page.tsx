"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Field, FieldDescription } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

async function sendMessageAction(message: string) {
  const loggedIn = false;
  if (!loggedIn) return null;

  return { message: "AI reply to: " + message };
}

export default function ChatPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const data = await sendMessageAction(input);
    if (data == null) {
      router.push("/login");
      return;
    }

    setMessages([...messages, { role: "user", text: input }]);
    setInput("");

    // will add AI reply
    setMessages((prev) => [...prev, { role: "ai", text: data.message }]);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const data = await sendMessageAction(`Uploaded image: ${file.name}`);
    if (data == null) {
      router.push("/login");
      return;
    }

    setMessages([...messages, { role: "user", text: `Uploaded image: ${file.name}` }]);
    setMessages((prev) => [...prev, { role: "ai", text: data.message }]);
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <Card className="w-full max-w-2xl rounded-xl shadow-lg flex flex-col mb-16">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Med.AI Assistant</CardTitle>
          <CardDescription className="text-center">
            Chat with the AI or upload an image and let it do the rest
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col h-[70vh]">
          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto space-y-3 p-4 bg-gray-100 rounded-md">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-xs ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white self-end"
                    : "bg-white text-gray-800 self-start shadow"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input bar */}
          <Field className="mt-4">
            <InputGroup>
              <InputGroupInput
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask anything..."
                className="px-4 py-3 text-lg rounded-l-md focus:ring-2 focus:ring-blue-500"
              />
              <InputGroupAddon align="inline-end" className="flex gap-2">
                {/* Upload button */}
                <button
  type="button"   
  onClick={handleUploadClick}
  className="p-2 rounded-md hover:bg-gray-100"
>
  📎
</button>

               <input
  type="file"
  accept="image/*"
  ref={fileInputRef}
  onChange={handleFileChange}
  className="hidden"
/>

                {}
{input.trim().length > 0 ? (
  <button
    type="button" 
    onClick={handleSend}
    className="p-2 rounded-md hover:bg-gray-100"
  >
    {/* Send arrow icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="size-5 text-gray-800"
    >
      <path d="M2.94 2.94a.75.75 0 0 1 .82-.17l13 5a.75.75 0 0 1 0 1.38l-13 5a.75.75 0 0 1-.82-1.17L6.7 10 2.94 4.11a.75.75 0 0 1 0-1.17Z" />
    </svg>
  </button>
) : (
  <button
    type="button"   
    className="p-2 rounded-md hover:bg-gray-100"
  >
    {/* Microphone icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="size-5 text-gray-600"
    >
      <path d="M7 4a3 3 0 0 1 6 0v6a3 3 0 1 1-6 0V4Z" />
      <path d="M5.5 9.643a.75.75 0 0 0-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5h-1.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-1.5v-1.546A6.001 6.001 0 0 0 16 10v-.357a.75.75 0 0 0-1.5 0V10a4.5 4.5 0 0 1-9 0v-.357Z" />
    </svg>
  </button>
)}
              </InputGroupAddon>
            </InputGroup>
            
          </Field>
        </CardContent>
      </Card>
    </div>
  );
}