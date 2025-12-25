<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/todolist">Todo List</RouterLink>
  </nav>
</template>

<style scoped>
a {
  margin-right: 30px;
  text-decoration: none;
  color: blue;
}
a:hover {
  color: red;
}
</style>
