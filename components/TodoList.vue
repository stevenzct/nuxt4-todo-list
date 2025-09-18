<template>
  <div>
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
  props: ['todos'],
  components: { TodoItem }
}
</script>