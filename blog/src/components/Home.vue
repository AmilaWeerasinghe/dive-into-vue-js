<template>
<h1>Home Component</h1>
<h1>Name:{{name}}</h1>
<h1>Email:{{getName()}}</h1>
<h1>Email:{{getData().email}}</h1>
</template>

<script>
export default{
    name:"Home",
    data(){
        return{
            name:"amila",
            email:"amila@arimaclanka"
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
        }
    }
}
</script>

<style scoped>
h1{
    color:orange
}

</style>