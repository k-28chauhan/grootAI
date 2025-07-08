import { create } from "zustand";

export const useToDoStore = create((set, get) => ({
    tasks: [],
    id: 1,
    addTasks: (task) => {
        const currentId = get().id;
        set((state) => ({
            tasks: [...state.tasks, {id: currentId, task, completed: false}],
            id: currentId + 1
        }));
    },
    deleteTasks: (id) => 
        set((state) => ({
            tasks: state.tasks.filter((task) => task.id != id)
        })
    )

}));