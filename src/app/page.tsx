"use client";
import WidgetContainer, {
  Widget,
} from "@/components/organisms/WidgetContainer";
import React, { useState } from "react";

const initialWidgets: Widget[] = [
  { id: "1", text: "First widget" },
  { id: "2", text: "Second widget" },
];

export default function Home() {
  const [widgets, setWidgets] = useState<Widget[]>(initialWidgets);

  const handleAdd = () => {
    const newId = (widgets.length + 1).toString();
    setWidgets([...widgets, { id: newId, text: `New widget ${newId}` }]);
  };

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Text widget demo !</h1>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-[80vw] max-w-5xl">
        <section className="w-full">
          <WidgetContainer widgets={widgets} onAdd={handleAdd} />
        </section>
      </main>
    </div>
  );
}
