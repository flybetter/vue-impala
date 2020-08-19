<template>
  <div name="first">
    <span>
          {{message}}
    </span>
    <br>
    <span v-bind:title="title">
        look at the title
    </span>
    <br>
    <span v-if="seen">
       you can see me
    </span>
    <br>
    <ol >
      <li v-for="(todo,index) in todos" :key="index">{{index}}-{{todo.text}}</li>
    </ol>
    <br>
    <span>
      <p>{{message_two}}</p>
      <button @click="clickReverse">reverse</button>
    </span>
    <br>
    <span>
      <input v-model="message_three">
      <br>
      <span>{{message_three}}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'first',
  data () {
    return {
      message: 'michael',
      message_two: 'michael is a very incredible person！',
      message_three: 'special core',
      title: 'now time' + new Date().toLocaleDateString(),
      seen: false,
      todos: [
        {text: 'haha'},
        {text: 'heihei'},
        {text: 'baba'}
      ]
    }
  },
  methods: {
    clickReverse () {
      this.message_two = this.message_two.split('').reverse().join('')
    }
  }
}
</script>

<style scoped>

</style>
