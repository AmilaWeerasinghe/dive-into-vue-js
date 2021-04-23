<template>
<h2>Component 2</h2>
<input type="text" placeholder="input email" v-model="email"/><br>
<input type="password" placeholder="input password" v-model="password"/><br>
<button type="button" v-on:click="getData()" >Get data</button>
</template>

<script>
export default{
    name:"Input",
    data(){
        return{
        email:null,
        password:null
        }
    },
    methods:{
        getData(){
            console.warn("values:",this.email,this.password);
        }

    }
}
</script>

<style scoped>
h2{
    color:blue
}
</style>