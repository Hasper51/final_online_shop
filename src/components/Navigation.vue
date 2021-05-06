<template>
    <div class="main">
        <b-container>
            <b-navbar variant="faded" type="light">
                <b-navbar-brand href="#">Shop</b-navbar-brand>
            
                <b-navbar-nav>
                    <b-nav-item href="#" @click="navigationLink(),selectCategory('ALL')" >Все товары</b-nav-item>
                    <b-nav-item href="#" @click="selectCategory('Clothing')" >Одежда</b-nav-item>
                    <b-nav-item href="#" @click="selectCategory('Accessories')" >Аксессуары</b-nav-item>
                    <b-nav-item href="#" @click="selectCategory('Shoes')" >Обувь</b-nav-item>
                </b-navbar-nav>
        </b-navbar>
      </b-container>
    </div>    
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    methods:{
        selectCategory: function(event){
            this.$emit('select-category',event) 
        },
        navigationLink(){
            this.$emit('navigate') 
        }
    }
}
</script>

<style scoped>
.main {
    background-color: #fff;
}
</style>
