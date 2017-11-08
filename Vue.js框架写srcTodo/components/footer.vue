<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{unNum}}</strong>
      <span>条未选中</span>
    </span>
  </footer>
</template>
<script>
  export default {
    props: ['unNum']
  }
</script>
