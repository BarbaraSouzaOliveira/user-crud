<template>
    <div class="container-nav">
         <v-icon
          dark
          left
          v-if="$route.path !== '/'"
          v-on:click="backPage"
          style="cursor: pointer"
        >
          mdi-arrow-left
        </v-icon>
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
  },
  methods: {
    backPage (){
      this.$router.go(-1)
    }
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
    display: flex;
}
</style>