<template>
<div>
    <Navbar name=" "/>
    <div class="container-notFound">
        <h3>Ops, pagina nao encontrada!</h3>
        <router-link 
                to="/"
                style="color: #FF9D00"
        >Voltar para Home.</router-link>
    </div>
</div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
export default {
    components: {
        Navbar
    },
}
</script>

<style>
.container-notFound {
  margin: 2rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  justify-items: center;  
  flex-direction: column;
  border-radius: 10px 10px 10px 10px;
  border: 1px solid rgb(187, 187, 187);
  box-shadow: -1px 8px 14px -9px rgba(92,92,92,0.75);
  text-align: center;
}
.container-notFound h3 {
  font-size: 15px;
  font-family: 'Oswald', sans-serif;
}
</style>