<template>
    <div class="users">
      <h1>user component</h1>
      <ul>
          <li v-for="user in users">
              {{user.name}} - {{user.email}}
              <button v-on:click="deleteUser(user)">X</button>
          </li>
          
      </ul>
      <form v-on:submit.prevent="addUser">
          <input type="text" v-model="newUser.name" placeholder="Nombre">
          <input type="text" v-model="newUser.email" placeholder="email">
          <button type="submit">ADD</button>
      </form>
    </div>
</template>
<script>
export default {
    data()
    {
        return{
            users: [

            ],
            newUser:{
            }
        }
    },
    methods: {
        addUser(){
            this.users.push(this.newUser);
            this.newUser={};
        },
        deleteUser(user)
        {
            this.users.splice(this.users.indexOf(user), 1)
        }
    },
    created(){
         this.$http.get('https://jsonplaceholder.typicode.com/users')
           .then(res => this.users=res.body);

    }
}
</script>
<style lang="css">
  .users{
      background: #333;
      color: white;
      padding: 10px;
  }
</style>