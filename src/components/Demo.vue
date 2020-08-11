<template>
  <div name="Demo">
    <h1>{{msg}}</h1>
    <ul>
      <li v-for="book in books" :key="book">{{book.name}}</li>
    </ul>
    <input type="text" v-model="name" placeholder="你的名字">
    <h1>你好,{{name}}</h1>
    <h1>{{date}}</h1>
    <span v-html="link"></span>
    <div v-pre> {{name}}</div>
    <div class="static" :class="{'active':isActive,'error':isError}"></div>
    <div>
      <ul>
        <li v-for="(key,value,index) in user" :key="index" >
          {{index}}-{{key}}:{{value}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// var padDate=function (value) {
//   return value<0?'0'+value:value;
// }

export default {
  name: 'Demo',
  mounted () {
    var _this = this
    this.timer = setInterval(function () {
      _this.date = new Date()
    }, 1000)
  },
  beforeCreate () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  // filter () {
  //   formatDate: function f(value) {
  //       var date=new Date(value);
  //       var year=date.getFullYear();
  //       var month=padDate(date.getMonth());
  //       var day=padDate(date.getDay());
  //       var hour=padDate(date.getHours());
  //       var minutes=padDate(date.getMinutes());
  //       var second=padDate(date.getSeconds());
  //       return year+'-'+month+'-'+day+' '+hour+':'+minutes+':'+second;
  //   }
  // },
  computed: {
    now: function () {
      return Date.now()
    }
  },
  data () {
    return {
      msg: 'i came from ',
      books: [
        {name: 'demo1'},
        {name: 'demo2'},
        {name: 'demo3'}
      ],
      name: '',
      date: new Date(),
      link: '<a href="#">这个是一个链接</a>',
      isActive: true,
      isError: true,
      user: {
        name: 'micheal',
        age: 64,
        gender: '难'
      }
    }
  }
}
</script>

<style scoped>
  body{width: 100%;height: 100%;position: relative;background-color: #ccc}
</style>
