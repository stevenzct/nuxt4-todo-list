<template>
  <div class="todo">
    <h3>{{ todo.title }}</h3>
    <div class="icons">
      <i
        @click="todoStore.toggleCompleted(todo.id)"
        :class="{ active: todo.isCompleted }"
        class="material-icons"
      >check_circle</i>
    </div>
  </div>
</template>

<script>
import { useTodoStore } from '../stores/TodoStore'
export default {
  props: ['todo'],
  setup() {
    const todoStore = useTodoStore()
    return { todoStore }
  }
}
</script>