<template>
  <div>
    <Navbar name="Criar usuários"/>
      <v-alert
          elevation="8"
          outlined
          text
          type="success"
          v-if="sucess"
      >{{sucessMesage}}</v-alert>           
      <v-alert
        color="red"
        elevation="8"
        outlined
        text
        type="error"
        v-if="fail"
      >Algo deu errado! {{failMensage}}</v-alert>
    <div class="container-create">  
      <div style="width: 80vw; padding: 2rem;">
        <span>Selecione um avatar</span>
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
                  :alt="j" 
                  class="create-img"
                  :style="[avatar === i+'-'+j ? {'background': '#FF9D00'} : {'background': 'white'}]"
                  v-on:click="onClickImg(i, j)"
                />
              </v-flex>
            </v-layout>    
          </v-carousel-item>
        </v-carousel>
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
            :disabled="isEdit"
          ></v-text-field>      
          <v-btn
            :disabled="!valid"
            color="#FF9D00"
            class="mr-4"
            @click="validate"
          >
            {{isEdit ? 'Editar usuários' : 'Criar usuários'}}
          </v-btn>    
        </v-form>      
      </div>
    </div> 
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  name: 'Create',
  components: {
    Navbar,
  },
  data(){
      return {
        avatar: 0,
        valid: true,
        name: '',
        nameRules: [
          v => !!v || 'Nome e obrigatorio',
          v => (v && v.length <= 30) || 'Nome precisa ter menos que 30 caracters',
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail e obrigatorio',
          v => /.+@.+\..+/.test(v) || 'E-mail precisa ser valido',
        ],
        fail: false,
        failMensage: '',
        sucess: false,
        sucessMesage: '',
        isEdit: false,
      }
  },
  mounted (){
    let  index = this.$route.params.editIndex;
    console.log(index)    
    if(index>=0){
      this.isEdit = true;
      let users = this.$store.getters.getUser
      console.log(users[index])
      this.avatar = users[index].avatar;
      this.email = users[index].email;
      this.name = users[index].name;
    }
  },
  methods: {
    getImgUrl(i,j) {
        return require('../assets/img/avatar/Ativo'+i+'-'+j+'.png');
    },
    onClickImg (i,j){
        this.avatar = i+'-'+j;
    },
    toggleFail(){
      this.fail = !this.fail;
    },
    validate () {
      if(this.$refs.form.validate() && this.avatar !== 0){
        console.log(this.avatar)
        let users = this.$store.getters.getUser
        if(!this.isEdit && users.findIndex(e=> e.email === this.email)!== -1){
          this.fail = true;
          this.failMensage = 'Email ja cadastrado'
          setTimeout(this.toggleFail,2000);
        }else{
          if(this.isEdit){
            console.log("aquiiusiaz")
            this.sucess = true;
            this.sucessMesage = 'Usuario Editado com Sucesso'
            this.$store.commit('editUserByIndex',{
              user: {
                name: this.name,
                avatar: this.avatar,
                email: this.email,
              },
              index:  this.$route.params.editIndex              
            })
            setTimeout(()=>this.$router.push({ path: '/'}),1000)
          }else{
            this.sucess = true;
            this.sucessMesage = 'Usuario Criado com Sucesso'
            this.$store.commit('addUsers', {
              name: this.name,
              avatar: this.avatar,
              email: this.email,
            })
            setTimeout(()=>this.$router.push({ path: '/'}),1000)
          }
        }        
      }else{
        this.fail = true;
        this.failMensage = 'Verifique se preencheu todos os campos'
        setTimeout(this.toggleFail,2000);
      }
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
.container-create {
  margin: 2rem;
  display: flex;
  justify-content: center;
  justify-items: center;
  border-radius: 10px 10px 10px 10px;
  border: 1px solid rgb(187, 187, 187);
  box-shadow: -1px 8px 14px -9px rgba(92,92,92,0.75);
}
</style>
