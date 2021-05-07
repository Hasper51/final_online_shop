<template>
  <div class="about">
    <Navigation
      @navigate="NavigationLink"
      :category="onegoods.category"
    />
    <b-container>
      <b-row class="mt-5" v-if="onegoods">
        <b-col cols="6" class="onegoodsimgcontainer">
          <img class="onegoodsimg" :src="require(`../${onegoods.img}`)">

        </b-col>
        <b-col cols="6">
          <h4 class="name">{{onegoods.name}}</h4>
          <span class="brand">Бренд:{{onegoods.brand}}</span>
          <h3 class="price">{{onegoods.price}} руб.</h3>

          <button class="add_cart">Добавить в корзину</button>
          <div class="specification">
            <span>О товаре:</span>
            <span>пол: {{onegoods.gender}}</span>
            <span>цвет: {{onegoods.color}}</span>
            <span>материал: {{onegoods.fabric}}</span>
            <span>модель(тип): {{onegoods.model}}</span>
            <span>сезон: {{onegoods.season}}</span>
            <span>артикул: {{onegoods.article_number}}</span>
            <span>страна-производитель: {{onegoods.country_manufacturer}}</span>
          </div>
        </b-col>
      </b-row>
    </b-container>                                         
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import { mapActions, mapState} from 'vuex'
export default {
  name: 'About',
  data(){
    return {
      
    }
  },
  components: {
    Navigation
  },
  computed: {
    ...mapState(['onegoods']),
    
  },
  methods: {
    ...mapActions(['loadOneGoods']),
    NavigationLink(){
      this.$router.push({ path: '/goods'})
        
    },
    
},
  
  mounted(){
    this.loadOneGoods(parseInt(this.$route.params.id))
  }
}
</script>

<style scoped>
.about{
  background-color: #E5E5E5;
}
.onegoodsimgcontainer{
  display: flex;
  justify-content:center;
}
.onegoodsimg{
  
  object-fit: contain;
  max-width: 100%;
  height: 400px;
}
.name{
  font-family: Roboto;
  color: #3C3C3C;
  font-size: 26px;
  
}
.brand{
  color: #3C3C3C;
  font-family: Roboto;
  font-size: 18px;
  

}
.price{
  font-family: Roboto;
  font-size: 28px;
  color: #B61118;
}
.add_cart{
  border: none;
  outline: none;
  margin-top: 3rem;
  font-family: Roboto;
  background: #D32F2F;
  border-radius: 2px;
  color: #fff;
  text-transform: uppercase;
  padding: 1em 2em;
}
.specification{
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
}
</style>