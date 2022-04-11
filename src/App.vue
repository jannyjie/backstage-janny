<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <h1>Todo</h1>
  <input type="text" v-model="todoName" @keyup.enter="addTodo">
  <ul>
    <li v-for="item in todo" :key="item.id">{{item.name}}</li>
  </ul>
  <!-- <router-view/> -->
</template>
<script>
import axios from 'axios';
const baseURL = "http://localhost:3000/todos";
export default ({
  name: 'app',
  data(){
    return{
      todo: [],
      todoName:'',
    };  
  },
  async created(){
    try{
      const res = await axios.get(baseURL);
      this.todo = res.data;
    }catch(e){
      console.log(e);
    }
  },
  methods:{
    async addTodo(){
      const res = await axios.post(baseURL, {name: this.todoName});

      this.todo = [...this.todo, res.data];
      this.todoName = '';
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
