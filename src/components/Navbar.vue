<template>
    <div class="container-nav">
        <h3>{{name}}</h3>
    </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    name: {
        type: String,
        required: true
    }, 
  }
}
</script>

<style>
.container-nav{
    height: 5vw;
    width: 100vw;
    background-color: #D5EFFB;
    box-shadow: -1px 8px 14px -9px rgba(92,92,92,0.75);
    margin-bottom: 1rem;
    padding: .2rem;
}
</style>