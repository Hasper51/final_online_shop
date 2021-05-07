<template>
  <div class="home">
    <Navigation 
      @select-category="filterGoods"
    />
    
    <b-container>
      <h5 class="category-name">{{this.category}}</h5>
      <b-row>
        <b-col cols="3" class="mb-4" v-for="good in sortedGood" :key="good.id">
          <div class="goods-card">
            
            <img :src="require(`../${good.img}`)" @click="$router.push({ path: `/goods/${good.id}`})">
            <div class="price-sale-block" v-if="good.newprice">
              <h5 class="price-sale">{{good.newprice}} руб.</h5>
              <h6 class="price-through">{{good.price}} руб.</h6>
            </div>
            <div class="price-block" v-else>
              <h5 class="price">{{good.price}} руб.</h5>
            </div>
            <span class="brand">{{good.brand}}</span>
            <b-row>
              <b-col>
                <span class="name">{{good.name}}</span>
              </b-col>
              <b-col cols="4" v-if="good.newprice" class="pl-0">
                <span class="discount" >
                    {{Math.round((good.price-good.newprice)/good.price*100)}}%
                </span>
              </b-col>
            </b-row>
            
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import Navigation from '@/components/Navigation.vue'
import { mapActions, mapGetters} from 'vuex'
export default {
  name: 'Home',
  data(){
    return {
      filteredgoods:[],
      category: 'Все товары'
    }
  },
  components: {
    Navigation
  },
  computed: {
    ...mapGetters(['allGoods']),
    sortedGood(){
      if (this.filteredgoods.length){
        return this.filteredgoods
      }else{
        return this.allGoods
      }
    },
  },
  methods: {
    ...mapActions(['loadGoods']),
    filterGoods(value){
      this.category = value;
      this.filteredgoods = [];
      let vm = this;
      this.allGoods.map(function(item){
        if (item.category === value){
          vm.filteredgoods.push(item)
        }
      })
    }
  },
  
  mounted(){
    this.loadGoods()
  }
}
</script>

<style scoped>
.home {
  background-color: #E5E5E5;
}
.goods-card{
  margin: 2em 0;
  display: flex;
  flex-direction: column;
  position: relative;
}
.category-name{
  margin-bottom: 1em;
  padding-top: 1em;
}
.goods-card img{
  cursor: pointer;
  object-fit: contain;
  max-width: 100%;
  
  display: block;
  margin-bottom: 1em;
}
.price{
  display: inline;
  font-family: Roboto;
  font-weight: 700;
  line-height: 23px;
  color: #3C3C3C;
}
.price-sale{
  display: inline;
  font-family: Roboto;
  font-weight: 700;
  line-height: 23px;
  color: #BA1219;

}
.price-through{
  display: inline;
  margin-left: 1em;
  text-decoration-line: line-through;
  color: #868686;
  font-family: Roboto;
  font-weight: 700;
  line-height: 19px;

}
.brand{
  display: block;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 7px;

}
.name{
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
}
.sale{
  color: #BA1219;
}

.discount {
  
  background-color: #CC0008;
  padding: 3px 8px;
  color: #fff;
  font-size: 16px;
  line-height: 19px;
  
    
}

</style>