import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

const TASKS_URL = "http://localhost:3500/posts";
const NOTES_URL = "http://localhost:4500/notes";

export const useAuthStore = create((set) => ({
    accessToken: null,
    userProfile: null,
    unreadMails: null,
    setAccessToken: (token) => set({accessToken: token}),
    setUserProfile: (profile) => set({userProfile: profile}),
    setUnreadMails: (unreadMails) => set({unreadMails: unreadMails})
}));

export const useSidebarStore = create(
    persist(
        (set) => ({
            state: "expanded",
            toggle: () => 
                set((prev) => ({
                    state: prev.state === "collapsed" ? "expanded" : "collapsed"
                })
            ),
            setState: (newState) => set({state: newState}),
        }),
        {
            name: "sidebar-storage"
        }
    )
);
export const useToDoStore = create((set, get) => ({
    tasks: [],
    fetchData: async () => {
        const res = await axios.get(TASKS_URL);
        set({tasks: res.data});
    },
    addTasks: async (task) => {
        const newTask = {task, completed:false};
        const res = await axios.post(TASKS_URL, newTask);
        set((state) => ({
            tasks: [...state.tasks, res.data]
        }));
    },
    editTasks: async (id, updatedTask) => {
        await axios.patch(`${TASKS_URL}/${id}`, {task: updatedTask});
        set((state) => ({
            tasks: state.tasks.map((task) => 
            task.id == id ? {...task, task: updatedTask} : task
            )
        }))
    },
    checkedTasks: async (id) => {
        const currentTask = get().tasks.find((task) => task.id == id);
        if(!currentTask) return;
        const updatedTask = !currentTask.completed;

        await axios.patch(`${TASKS_URL}/${id}`, {completed: updatedTask});
        set((state) => ({
            tasks: state.tasks.map((task) => 
                task.id == id ? {...task, completed: updatedTask} : task
            )
        }))
    },
    deleteTasks: async (id) => {
        await axios.delete(`${TASKS_URL}/${id}`);
        set((state) => ({
            tasks: state.tasks.filter((task) => task.id != id)
        }));
    }

}));
export const useNotesStore = create((set) => ({
    tasks: [],
    fetchNotes: async () => {
        const res = await axios.get(NOTES_URL);
        set({tasks: res.data});
    },
    addNotes: async (title, task) => {
        const newTask = {title, task};
        const res = await axios.post(NOTES_URL, newTask);
        set((state) => ({
            tasks: [...state.tasks, res.data]
        }));
    },
    editNotes: async (id,updatedTitle, updatedTask) => {
        await axios.patch(`${NOTES_URL}/${id}`, {title: updatedTitle, task: updatedTask});
        set((state) => ({
            tasks: state.tasks.map((task) => 
            task.id == id ? {...task, title: updatedTitle, task: updatedTask} : task
            )
        }))
    },
    deleteNotes: async (id) => {
        await axios.delete(`${NOTES_URL}/${id}`);
        set((state) => ({
            tasks: state.tasks.filter((task) => task.id != id)
        }));
    }

}));