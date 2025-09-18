<template>
    <form @submit.prevent="handleSubmit">
        <input 
          type="text"
          placeholder="I need to..."
          v-model="newTodo"
          >
        <button>Add</button>
    </form>
</template>

<script>
    import { ref } from 'vue'
    import { useTodoStore } from '../stores/TodoStore'
    export default {
      setup () {
        const todoStore = useTodoStore()

        const newTodo = ref('')

        const handleSubmit = () => {
            if (newTodo.value.length > 0) {
                todoStore.addTodo({
                    title: newTodo.value,
                    completed: false,
                    id: Math.floor(Math.random() * 10000)
                })
                newTodo.value = ''
            }
        }

        return {
            newTodo,
            handleSubmit
        }
      }

    }
</script>