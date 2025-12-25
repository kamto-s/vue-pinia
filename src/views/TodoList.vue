<template>
  <h1>Halaman Todo List</h1>
  <div>
    <form @submit.prevent="todoStore.addTodo(newTodo)">
      <input type="text" v-model="newTodo" placeholder="Add new todo..." />
      <input type="submit" value="Add" />
    </form>
  </div>

  <div class="getter_buttons">
    <button @click="show = 'all'">Show All</button>
    <button @click="show = 'done'">Done Only</button>
    <button @click="show = 'undone'">Undone Only</button>
  </div>
  <!-- all -->
  <div v-if="show == 'all'">
    <ul v-for="todo in todoStore.showAll">
      <li>
        <span :class="{ todo_done: todo.isDone }">
          {{ todo.name }}
        </span>
        <span>
          <button v-if="!todo.isDone" @click="todoStore.setAsDone(todo.name)">Set as done</button>
          <button v-if="todo.isDone" @click="todoStore.setAsUnDone(todo.name)">Set as undone</button>
        </span>
      </li>
    </ul>
  </div>
  <!-- done -->
  <div v-if="show == 'done'">
    <ul v-for="todo in todoStore.showDone">
      <li>
        <span :class="{ todo_done: todo.isDone }">
          {{ todo.name }}
        </span>
        <span>
          <button v-if="!todo.isDone" @click="todoStore.setAsDone(todo.name)">Set as done</button>
          <button v-if="todo.isDone" @click="todoStore.setAsUnDone(todo.name)">Set as undone</button>
        </span>
      </li>
    </ul>
  </div>
  <!-- undone -->
  <div v-if="show == 'undone'">
    <ul v-for="todo in todoStore.showUnDone">
      <li>
        <span :class="{ todo_done: todo.isDone }">
          {{ todo.name }}
        </span>
        <span>
          <button v-if="!todo.isDone" @click="todoStore.setAsDone(todo.name)">Set as done</button>
          <button v-if="todo.isDone" @click="todoStore.setAsUnDone(todo.name)">Set as undone</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.todo_done {
  text-decoration: line-through;
  color: red;
}
.getter_buttons {
  padding-inline-start: 40px;
  display: flex;
  width: 500px;
  margin-bottom: 20px;
  margin-top: 20px;
  gap: 10px;
}
form {
  width: 500px;
  padding-inline-start: 40px;
}
form input {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
}
form input:first-child {
  width: 83%;
  margin: 0px 10px 10px 0px;
}
ul {
  list-style: none;
  width: 500px;
}
li {
  margin-bottom: 5px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
}
</style>

<script>
import { useTodoStore } from "@/stores/todoStore";

export default {
  setup() {
    const todoStore = useTodoStore();

    return { todoStore };
  },
  data() {
    return {
      newTodo: "",
      show: "all",
    };
  },
};
</script>
