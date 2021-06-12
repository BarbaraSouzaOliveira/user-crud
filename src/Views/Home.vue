<template>
 <div class="conteiner-home">    
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card
          :elevation="hover ? 24 : 6"
          class="card-home"
        >
          <div></div>
          Criar Usuarios
        </v-card>
      </template>
    </v-hover> 
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card
          :elevation="hover ? 24 : 6"
          class="card-home"
        >
          <div></div>
          Listar Usuarios
        </v-card>
      </template>
    </v-hover>   
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style>
.card-home {
    width: 100px;
    height: 150px;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.conteiner-home {
 display: flex;
 justify-content: center;
 justify-items: center;
}
</style>
