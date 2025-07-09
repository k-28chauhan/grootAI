import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

const API_URL = "http://localhost:3500/posts";

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
        const res = await axios.get(API_URL);
        set({tasks: res.data});
    },
    addTasks: async (task) => {
        const newTask = {task, completed:false};
        const res = await axios.post(API_URL, newTask);
        set((state) => ({
            tasks: [...state.tasks, res.data]
        }));
    },
    checkedTasks: async (id) => {
        const currentTask = get().tasks.find((task) => task.id == id);
        if(!currentTask) return;
        const updatedTask = !currentTask.completed;

        await axios.patch(`${API_URL}/${id}`, {completed: updatedTask});
        set((state) => ({
            tasks: state.tasks.map((task) => 
                task.id == id ? {...task, completed: updatedTask} : task
            )
        }))
    },
    deleteTasks: async (id) => {
        await axios.delete(`${API_URL}/${id}`);
        set((state) => ({
            tasks: state.tasks.filter((task) => task.id != id)
        }));
    }

}));