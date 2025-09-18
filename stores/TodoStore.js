import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todoStore', {
    state: () => ({
        todos: [
            {id: 1, title: 'todo1', isCompleted: false},
            {id: 2, title: 'todo2', isCompleted: true},
            {id: 3, title: 'todo3', isCompleted: true},
        ],
    }),
    getters: {
        completed() {
            return this.todos.filter(t => t.isCompleted)
        },
        notCompleted() {
            return this.todos.filter(t => !t.isCompleted)
        },
        completedCount() {
            return this.todos.reduce((p, c ) => {
                return c.isCompleted ? p + 1 : p
            }, 0)
        },
        notCompletedCount() {
        return this.todos.filter(t => !t.isCompleted).length
        },
        totalCount: (state) => {
            return state.todos.length
        }
    },
    actions: {
        addTodo(todo) {
            this.todos.push(todo)
        },
        toggleCompleted(id) {
            const todo = this.todos.find(t => t.id === id)
            todo.isCompleted = !todo.isCompleted
        }
    }
})
