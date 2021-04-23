<template>
<h2>Child Component</h2>
<h2>{{name}} :{{getName()}}</h2>
</template>
<script>
export default{
    name:"Child",
    props:{
        name:String,
        getName:Function

    }
}
</script>