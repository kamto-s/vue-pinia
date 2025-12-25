import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todoList: [
      { name: "Belajar Html", isDone: false },
      { name: "Belajar CSS", isDone: false },
      { name: "Belajar Javascript", isDone: false },
    ],
  }),
  getters: {
    showAll(state) {
      return state.todoList;
    },
    showDone(state) {
      return state.todoList.filter((item) => item.isDone);
    },
    showUnDone(state) {
      return state.todoList.filter((item) => !item.isDone);
    },
  },
  actions: {
    setAsDone(name) {
      // this.todoList[index].isDone = true;
      this.todoList.find((item) => item.name == name).isDone = true;
      console.log(name);
    },
    setAsUnDone(name) {
      // this.todoList[index].isDone = false;
      this.todoList.find((item) => item.name == name).isDone = false;
      console.log(name);
    },
    addTodo(data) {
      if (data.length === 0) return alert("Todo tidak boleh kosong");

      let exists = this.todoList.filter((item) => item.name === data).length > 0;
      if (exists) return alert("Todo sudah ada");

      this.todoList.push({ name: data, isDone: false });
    },
  },
});
