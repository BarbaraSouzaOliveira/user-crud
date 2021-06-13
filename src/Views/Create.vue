<template>
  <div style="width: 80vw; padding: 2rem">
    <v-carousel 
        style="height: 180px;" 
         hide-delimiters
    >    
        <v-carousel-item
            v-for="i in 3" :key="i"     
        >
        <v-layout row style="padding: 2rem;justify-content: space-around;" >
            <v-flex xs2  :key="j" v-for="j in 5">
            <img
                :src="getImgUrl(i, j)" 
                v-bind:alt="j" 
                class="create-img"
                :style="[avatar === j+'-'+i ? {'background': '#FF9D00'} : {'background': 'white'}]"
                v-on:click="onClickImg(i, j)"
                />
            </v-flex>
        </v-layout>    
        </v-carousel-item>
    </v-carousel>
    <template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="30"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
</template>
    
  </div>
</template>

<script>

export default {
  name: 'Create',
  data(){
      return{
          avatar: 0
      }
  },
  methods: {
    getImgUrl(i,j) {
        return require('../assets/img/avatar/Ativo'+i+'-'+j+'.png');
    },
    onClickImg (i,j){
        console.log("pao",i,j)
        this.avatar = j+'-'+i;
    },
  },
};

</script>

<style>
.create-img{
    width: 50px; 
    height: 50px; 
    cursor: pointer;
    border-radius: 50px;
}
</style>
