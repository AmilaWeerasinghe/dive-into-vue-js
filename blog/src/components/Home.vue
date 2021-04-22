<template>
<h1>Home Component</h1>
<h1>Name:{{name}}</h1>
<h1>Email:{{getName()}}</h1>
<h1>Email:{{getData().email}}</h1>
<h1>{{count}}</h1>
<input type="text" v-model="data"/>
<h2>two way binding :{{data}}</h2>

<button v-on:click="getalert()">Click</button>
<button v-on:click="increase()">Click Count</button>
</template>

<script>
export default{
    name:"Home",
    data(){
        return{
            name:"amila",
            email:"amila@arimaclanka",
            count:0,
            data:0
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