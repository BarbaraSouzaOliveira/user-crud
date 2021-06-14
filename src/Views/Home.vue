<template>
    <div>
        <Navbar name="CRUD de usuários" />
        <div class="conteiner-home">  
            <CardNavigation 
                name="Criar usuários"
                route="/criar"
                imgName="IconCreate.png"                
            />
            <CardNavigation 
                name="Listar usuários"
                route="/listar"
                imgName="IconList.png"                
            />           
        </div>       
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import CardNavigation from '../components/CardNavigation.vue'
export default {
  name: 'Home',
  components: {
      Navbar,
      CardNavigation
  },
}
</script>

<style>
.conteiner-home {
 display: flex;
 justify-content: center;
 justify-items: center;
}
</style>
