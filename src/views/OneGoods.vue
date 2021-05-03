<template>
  <div class="about">
    <Navigation
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
            <span>пол: мужской</span>
            <span>цвет: красный</span>
            <span>материал: хлопок</span>
            <span>модель(тип): футболка</span>
            <span>сезон: лето</span>
            <span>артикул: 1110151050</span>
            <span>страна-производитель: Индонезия </span>
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
    
},
  
  mounted(){
    this.loadOneGoods(parseInt(this.$route.params.id))
  }
}
</script>

<style scoped>
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