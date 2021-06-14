<template>
<div>
    <Navbar name="Listar usuários"/>
    <div class="container-list">
        <div v-if="users.length === 0" class="container-nouser">
            <img 
                src="../assets/img/icon/user.png"
                alt="user"
                style="width: 100px; heigth: 100px"
            />
            <span>Ops!! não existe nenhum usuário cadastrado.</span>
            <router-link 
                to="/criar"
                style="color: #FF9D00"
            >cadastre um novo usuário.</router-link>
        </div>    
        <div style="width: 100%;" v-for="(user,index) in users" :key="index">
            <div class="card-list">
                <div style="display: flex">
                    <img 
                        :src="getImgUrl(user.avatar)"
                        :alt="user.name"
                        class="avatar-list"
                    />
                    <h3>{{user.name}}</h3>
                </div>
                <div>
                    <img 
                        src="../assets/img/icon/eye.png"
                        alt="eye"
                        style="width: 20px; heigth: 10px;cursor: pointer"
                        v-on:click="editUser(index)"                   
                    />
                    <img 
                        src="../assets/img/icon/trash.png"
                        alt="trash"
                        v-on:click="removeUser(index)"
                        class="icon-list"
                        style="width: 12px; heigth: 20px; cursor: pointer"
                    />
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
export default {
    components: {
        Navbar
    },
    data(){
        return{
            users:[],
        }
        
    },
    mounted(){
        this.updateList();
    },
    methods: {
        getImgUrl(i) {
            return require('../assets/img/avatar/Ativo'+i+'.png');
        },
        removeUser(index){
            this.$store.commit('removeUserByIndex', index);
            this.updateList();
        },
        updateList() {
            this.users = this.$store.getters.getUser
        },
        editUser(index) {
            console.log("aqui")
            this.$router.push({name: 'Create', params: { editIndex: index }})
        },
    }
}
</script>

<style>
.card-list{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(224, 224, 224);
    margin: 0 2rem 0 2rem;
    padding: .5rem;
    align-items: center;
}
.avatar-list{
    border-radius: 50px;
    width: 40px;
    height: 40px;
    margin-right: .5rem;
}
.card-list h3{
    margin-right: .5rem;
}
.container-nouser {
    display: flex; 
    flex-direction: column;
    align-items: center;
    font-family: 'Open Sans Condensed', sans-serif;
}
.container-list {
  margin: 2rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  justify-items: center;  
  flex-direction: column;
  border-radius: 10px 10px 10px 10px;
  border: 1px solid rgb(187, 187, 187);
  box-shadow: -1px 8px 14px -9px rgba(92,92,92,0.75);
}
</style>