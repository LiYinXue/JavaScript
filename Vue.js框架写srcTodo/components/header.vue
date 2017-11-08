<template>
  <header class="header" >
      <h1>todos</h1>
      <input 
        v-model='val'
        class="new-todo" 
        placeholder="请输入内容"
        @keydown.13="addTodo"
      />
  </header>
</template>
<script>
  // Vue.component('', {})

  export default {
    data () {
      return {
        val: ''
      }
    },
    methods: {
      addTodo () {
        // this => 当前组件的实例
        // console.log(this.val)
        // 发布一个事件为new-todo 带上参数
        this.$emit('new-todo', this.val)
        this.val = '';
      }
    }
  }
</script>
