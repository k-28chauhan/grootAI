import { useState } from "react";
import { Button } from "./ui/button";

const Notes = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: "Sample Note", content: "This is a sample note." },
    { id: 1, title: "Sample Note", content: "This is a sample note with some extra stuff" },
    { id: 1, title: "Sample Note", content: "This is a sample note with even more extra boring unnecessary stuff." }
  ]);

  return (
    <div className="flex flex-col h-full bg-card rounded-xl p-4 gap-4 shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Notes</h2>
        <Button size="sm" variant="outline">+ Add Note</Button>
      </div>
      <div className="flex flex-col gap-2 overflow-auto">
        {notes.length === 0 ? (
          <p className="text-muted-foreground text-sm">No notes yet.</p>
        ) : (
          notes.map(note => (
            <div key={note.id} className="bg-black/40 rounded-md p-3">
              <div className="font-medium text-base truncate">{note.title}</div>
              <div className="text-sm text-muted-foreground line-clamp-2">{note.content}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notes;