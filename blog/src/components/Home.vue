<template>
<h1>Home Component</h1>
<h2>Name:{{name}}</h2>
<h2>Email:{{getName()}}</h2>
<h3>Email:{{getData().email}}</h3>
<h4>{{count}}</h4>
<input type="text" v-model="data"/>
<h4>two way binding :{{data}}</h4>

<button v-on:click="getalert()">Click</button>
<button v-on:click="increase()">Click Count</button>
<h3 v-if="show">Condition in vue is true</h3>
<h3 v-else>Condition in vue is false</h3>
<button v-on:click="show=!show">Click to change the condition</button>
</template>

<script>
export default{
    name:"Home",
    data(){
        return{
            name:"amila",
            email:"amila@arimaclanka",
            count:0,
            data:0,
            show:true
        }
    },
    methods:{
        getName(){
            return "Amila@gmail"
        },
        getData(){
            return{
                name:"anil",
                email:"sidhu"
            }
        },
        getalert(){
            alert("button clicked")
        },
        increase(){
            this.count=this.count+1
        }
    }
}
</script>

<style scoped>
h1{
    color:orange
}

</style>