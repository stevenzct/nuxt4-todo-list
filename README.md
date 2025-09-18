# Nuxt 4 + Pinia Todos
A simple Todo application built with **Nuxt 4** and **Pinia** for state management.

---

## 📸 Screenshot
![App Screenshot](/public/todolist-nuxt4.png)

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/stevenzct/nuxt4-todo-list.git

# Navigate into the project folder
cd nuxt4-todo-list

# Install dependencies
npm install

# Start the development server
npm run dev

Then open your browser at 👉 http://localhost:3000

✨ Features

Pinia Global Store (stores/TodoStore.js) manages todos and actions.

Components: TodoInput, TodoList, TodoItem.

Nuxt 4 App Entry (app/app.vue) with global styles in app/assets/css/main.css.


📂 Project Structure
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
