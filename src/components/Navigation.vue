<template>
    <div class="main">
        <b-container>
            <b-navbar variant="faded" type="light" class="p-0">
                <b-navbar-nav >
                    
                    <b-nav-item 
                            v-for="item in items"
                            :key="item.text"
                            @click="active = item.text,navigationLink(),selectCategory(item.text)"
                            :class="{ active: item.text === active }"
                             
                    >{{item.text}}</b-nav-item>
                    
                </b-navbar-nav>
        </b-navbar>
      </b-container>
    </div>    
</template>

<script>
export default {
    data(){
        return {
            items: [
                { text: 'Все товары' },
                { text: 'Футболки' },
                { text: 'Джинсы' },
                ],
                active: this.category
        }
    },
    props: ['category'],
    methods:{
        selectCategory: function(event){
            this.$emit('select-category',event)
            
        },
        navigationLink(){
            this.$router.push({ path: '/goods'})
            
        }
    }
}
</script>

<style scoped>
.main {
    background-color: #fff;
}
.active{
    background-color: #E5E5E5;
}
</style>
