<template>
  <section class="main">
    <input 
      class="toggle-all" 
      type="checkbox" 
      v-model="selectAll" 
    />
      <ul class="todo-list">
          <item 
            v-for="item,index in st" 
            :key='index' 
            :option = 'item'
            :index = 'index'
            @remove-todo="removeHandle"
          ></item>
      </ul>
  </section>
</template>
<script>
  import item from './item'
  export default {
    props: ['st', 'all'],
    /* data () {
      return {
        selectAll: this.all 把all作为数据的初始值之后，all发生了变化在数据中不会追踪变化
      }
    }, */
    computed: {
      selectAll: {
        get () {
          return this.all
        },
        set (val) {
          this.$emit('all-selected', val)
        }
      }
    },
    components: {
      item
    },
    methods: {
      removeHandle (index) {
        console.log('index:' + index)
        this.$emit('remove', index)
      }
    }
  }
</script>
