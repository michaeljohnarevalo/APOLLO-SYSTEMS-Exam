<template>
    <nav class="container">
            <v-toolbar-title>🚀 SpaceX App</v-toolbar-title>
<ul>
      <li>
        <NuxtLink to="/">
          Launches
        </NuxtLink>
      </li>
    </ul>
    </nav>
</template>
<style scoped>
.container {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f5f5f5;
}
ul {
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}
a.router-link-active {
  color: #0066cc;
  text-decoration: underline;
}
</style>