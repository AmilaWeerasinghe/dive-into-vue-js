<template>
<h2>Component 2</h2>
<input type="text" placeholder="input email" v-model="email"/><br>
<input type="password" placeholder="input password" v-model="password"/><br>
<button type="button" v-on:click="getData()" >Get data</button>
<h2>Get check box</h2>
<h3>technology</h3>
<label For="java">Java</label>
<input type="checkbox" value="Java" id="java" v-model="technology">
<label For="python">Python</label>
<input type="checkbox" value="Python" id="python" v-model="technology">
<label For="js">Javascript</label>
<input type="checkbox" value="JavaScript" id="js" v-model="technology">

<h3>Profession</h3>
<label For="student">Student</label>
<input type="radio" value="Student" id="student" v-model="profession">
<label For="developer">Developer</label>
<input type="radio" value="Developer" id="developer" v-model="profession">
<h4>I am a: {{profession}}</h4>
<h4>Technology:{{technology}}</h4>
</template>

<script>
export default{
    name:"Input",
    data(){
        return{
        email:null,
        password:null,
        technology:[],
        profession:null
        
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