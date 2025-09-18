<template>
  <main>
    <!-- heading -->
    <header class="py-12 px-4 bg-[#f6f6f6]">
      <h1 class="text-center text-3xl font-bold">Todo List</h1>
    </header>

    <!-- todo input form -->
    <div class="new-todo-form">\
       <TodoInput />
    </div>
   

    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All Todos</button>
      <button @click="filter = 'notCompleted'">Not Done</button>
      <button @click="filter = 'completed'">Done</button>
    </nav>

   <!-- todo list -->
   <div class="todo-list" v-if="filter === 'all'">
      <p>You have {{ todoStore.totalCount }} todos</p>
      <TodoList :todos="todoStore.todos" />
   </div>

    <div class="todo-list" v-if="filter === 'notCompleted'">
      <p>You have {{ todoStore.notCompletedCount }} todos not completed</p>
       <TodoList :todos="todoStore.notCompleted" />
   </div>

  
   <div class="todo-list" v-if="filter === 'completed'">
      <p>You have {{ todoStore.completedCount }} todos completed</p>
       <TodoList :todos="todoStore.completed" />
   </div>

  </main>
</template>

<script>
  import { ref } from 'vue'
  import TodoList from '../components/TodoList.vue'
  import TodoInput from '../components/TodoInput.vue'
  import { useTodoStore } from '../stores/TodoStore'

  export default {
    components: {
      TodoList, 
      TodoInput
    },
    setup() {
      const todoStore = useTodoStore()

      const filter = ref('all')

      return { todoStore, filter }
    },
    
  }

</script>