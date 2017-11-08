<template>
  <div id="app">
    <section class="todoapp">
      <custom-header @new-todo="newTodoAdd"></custom-header>
      <custom-content
        :st='list'
        @remove='removeHandle'
        v-show='list.length'
        :all = 'selectedAll'
        @all-selected='allSelectedHandle'
      ></custom-content>
      <custom-footer  
        v-show='list.length' 
        :un-num='unselectedTodoNum'
      ></custom-footer>
    </section>
  </div>
</template>

<script>

import Header from './components/header'
import customContent from './components/content'
import Footer from './components/footer'

let data = [
  {
    title: '今天天气不错',
    selected: false
  },
  {
    title: '我要学习',
    selected: true
  },
  {
    title: '我要学习',
    selected: true
  }
]

export default {
  name: 'app',
  data () {
    return {
      list: data
    }
  },
  computed: {
    selectedTodo () {
      return this.list.filter(item => item.selected)
      /* return this.list.filter((item) => {
        return !item.selected
      }) */
    },
    unselectedTodoNum () {
      return this.list.length - this.selectedTodo.length
    },
    selectedAll () {
      return this.selectedTodo.length === this.list.length
    }
  },
  components: {
    'custom-header': Header,
    customContent,
    'custom-footer': Footer
  },
  methods: {
    newTodoAdd (todo) {
      // console.log(todo)
      this.list.push({
        title: todo,
        selected: false
      })
    },
    removeHandle (index) {
      console.log(index + 'hello')
      this.list.splice(index, 1);
    },
    allSelectedHandle (val) {
      console.log(val + '123')
      this.list.forEach((item) => {
        item.selected = val
      })
    }
  }
}
</script>

<style>

</style>
