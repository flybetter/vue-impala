<template>
  <div name="Demo">
    <h1>{{msg}}</h1>
    <ul>
      <li v-for="book in books" :key="book">{{book.name}}</li>
    </ul>
    <input type="text" v-model="name" placeholder="你的名字">
    <h1>你好,{{name}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      msg: 'i came from ',
      books: [
        {name: 'demo1'},
        {name: 'demo2'},
        {name: 'demo3'}
      ],
      name: ''
    }
  }
}
</script>

<style scoped>
  body{width: 100%;height: 100%;position: relative;background-color: #ccc}
</style>
