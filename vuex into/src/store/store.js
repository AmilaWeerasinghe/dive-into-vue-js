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
    },
    mutations:{
        reducePrice:state=>{
            state.products.forEach(products=>{
                products.price-=1;
            })
        }
    },
    actions:{
        reducePrice:context=>{
            setTimeout(function(){
                context.commit('reducePrice')
            },2000)
        }
    }

})