import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export const store=new Vuex.Store({
    state:{
        products: [
            { name: "banana", price: 20 },
            { name: "Coconut", price: 60 },
          ],
    },
    getters:{
        saleProducts:state=>{
            var saleProducts = state.products.map((product) => {
                return {
                  name: "***" + product.name + "***",
                  price: product.price / 2,
                };
              });
              return saleProducts;
        }
    }
})