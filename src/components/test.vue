<template>
<div class="test">
   {{msg}}   
</div>
</template>

<script>
 export default{
     data(){
         return{

             title: 'Tik Tak Toe',
             user: {
                 fistname: 'Ryan',
                 lastname: 'Miller'
             },
             myHtml: '<h3>Hola joel</h3>',
             showName: false,
             tasks:[
                 {title: 'eat'},
                 {title: 'diner'}
             ]
         }
     },
    methods: { 
             saludar(name){
                 alert('hello '+ name)
             },
             typingenter(e){
                 console.log('dio un enter');
             }
            
         },
    computed:{
        fullname(){
            return this.user.fistname+' '+this.user.lastname;
        }
    },
    props:{
        msg:{
            type:String,
            default:'mensaje por defecto'
        }
    }
 }
</script>

<style>
.test{
    background: black;
    color: white;
}

</style>