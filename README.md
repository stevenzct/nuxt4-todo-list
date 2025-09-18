[App Screenshot](./public/todolist-nuxt4.png)

# Nuxt4 + Pinia Todos

A simple Todo application built with **Nuxt 4** and **Pinia** for state management.

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/stevenzct/nuxt4-todo-list.git

# Navigate into the project folder
cd nuxt4-todo-list

# Install dependencies
npm install

# Run the development server
npm run dev

🛠 Run (Step-by-Step)

Clone the repository:

git clone https://github.com/stevenzct/nuxt4-todo-list.git
cd nuxt4-todo-list


Install dependencies:

npm install


Start the development server:

npm run dev


Open the app in your browser:
http://localhost:3000

## What I implemented
- Pinia global store (stores/TodoStore.js) manages all todos and actions.
- Components: TodoInput, TodoList, TodoItem

.
├── app/
│   ├── app.vue             # Root app entry (layout wrapper)
│   └── assets/
│       └── css/ 
│           └── main.css    # Global styles
├── components/
│   ├── TodoInput.vue
│   ├── TodoList.vue
│   └── TodoItem.vue
├── stores/
│   └── TodoStore.js
└── README.md