import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home.vue";
import AboutView from "@/views/About.vue";
import TodoListView from "@/views/TodoList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomeView },
    { path: "/about", component: AboutView },
    { path: "/todolist", component: TodoListView },
  ],
});

export default router;
