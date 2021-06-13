<template>  
    <v-hover>
        <template v-slot:default="{ hover }">
            <router-link 
                :to="route"
                style="text-decoration: none"
            >
            <v-card
            :elevation="hover ? 24 : 6"
            class="card-card"
            >
            <img 
                :src="getImgUrl(imgName)"
                :alt="name"
                class="img-card-card"
            />
            {{name}}
            </v-card>
            </router-link>
        </template>
    </v-hover>   
</template>

<script>
export default {
  name: 'Card',
  props: {
      name: {
          type: String,
          require: true
      },
      route: {
          type: String,
          require: true
      },
      imgName: {
          type: String,
          require: true,
      }
  },
  methods: {
    getImgUrl(name) {
        return require('../assets/img/pic/'+name);
    },
  },
}
</script>

<style>
.card-card {
    width: 100px;
    height: 150px;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;    
    padding: .3rem;
    cursor: pointer;
    text-decoration: none;
}
.img-card-card {
    width: 90px;
    height: 80px;
}
</style>
