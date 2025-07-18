import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { useNotesStore } from "../../store/todo-list";
import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/dialog";

const Notes = () => {
  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const tasks = useNotesStore((state) => state.tasks);
  const addTasks = useNotesStore((state) => state.addNotes);
  const fetchData = useNotesStore((state) => state.fetchNotes);
  const editTasks = useNotesStore((state) => state.editNotes);
  const deleteTasks = useNotesStore((state) => state.deleteNotes);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col h-full bg-card rounded-xl p-4 gap-4 shadow-md">
      <Dialog open={openDialog} onOpenChange={(isOpen) => {
        setOpenDialog(isOpen);
        if (!isOpen) {
          setEditingTask(null);
          setTitle("");
          setNote("");
        }
      }}>
        <DialogTrigger asChild>
          <Button className="mr-3">
            Add Note
          </Button>
        </DialogTrigger>
        <DialogContent>
          <h1>{editingTask ? "Edit Title" : "Add Title"}</h1>
          <textarea
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-muted/50 p-2 text-lg outline-none resize-none"
            rows={1} placeholder="Add title here"></textarea>
          <h1>{editingTask ? "Edit Note" : "Add Note"}</h1>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="bg-muted/50 p-2 text-lg outline-none resize-none"
            rows={5} placeholder="Add text here"></textarea>
          <div className="flex gap-2">
            {editingTask && (
              <Button variant="destructive"
                onClick={() => {
                  deleteTasks(editingTask.id);
                  setEditingTask(null);
                  setNote("");
                  setTitle("");
                  setOpenDialog(false);
                }}>
                Delete
              </Button>
            )}
            <Button
              onClick={() => {
                if (note.trim()) {
                  if (editingTask) {
                    editTasks(editingTask.id, title, note);
                  }
                  else addTasks(title, note);
                  setEditingTask(null);
                  setNote("");
                  setTitle("");
                  setOpenDialog(false);
                }
              }}>
              {editingTask ? "Update" : "Submit"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <div className="flex flex-col gap-2 overflow-auto">
        {tasks.length === 0 ? (
          <p className="text-muted-foreground text-sm">No notes yet.</p>
        ) : (
          tasks.map(note => (
            <div key={note.id} className="bg-black/40 rounded-md p-3 cursor-pointer"
            onClick={() => {
              setOpenDialog(true);
              setNote(note.task);
              setTitle(note.title);
              setEditingTask(note)
            }}>
              <div className="font-medium text-base truncate">{note.title}</div>
              <div className="text-sm text-muted-foreground line-clamp-2">{note.task}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notes;