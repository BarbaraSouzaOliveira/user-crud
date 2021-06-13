<template>
    <div>
        <Navbar name="CRUD de USUARIOS" />
        <div class="conteiner-home">  
            <CardNavigation 
                name="Criar Usuarios"
                route="/criar"
                imgName="IconCreate.png"                
            />
            <CardNavigation 
                name="Listar Usuarios"
                route="/criar"
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
  }
}
</script>

<style>
.conteiner-home {
 display: flex;
 justify-content: center;
 justify-items: center;
}
</style>
