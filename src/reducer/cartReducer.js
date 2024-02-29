const cartReducer = (state,action) =>{

        if(action.type == "ADD_TO_CART"){

            let {id,color,amount,product} = action.payload;

            let existingProduct = state.cart.find((curItem)=>curItem.id == id + color);

            if(existingProduct){

                let updatedProduct = state.cart.map((curItem)=>{
                        if(curItem.id == id + color){

                            let  newAmount = curItem.amount + amount;

                             if(newAmount >= curItem.max){

                                   newAmount = curItem.max;
                             }

                            return {
                                  
                                  ...curItem,
                                  amount:newAmount
                            }
                        }else {

                                return curItem
                        }
                })

                return {

                        ...state,
                           cart:updatedProduct
                }

            }else{


                let cartProduct={
                  
                        id:id+color,
                        name:product.name,
                        color,
                        amount,
                        image:product.image[0].url,
                        price:product.price,
                        max:product.stock

          }

          return {
                ...state,
                cart:[...state.cart,cartProduct]
          }

            }
        }

        if(action.type === "REMOVE_ITEM"){

                let updatedCart = state.cart.filter((curItem)=>curItem.id!==action.payload)

                return {
                        ...state,
                        cart:updatedCart
                }

        }

        // to empty or clear to cart 

      if(action.type === "CLEAR_CART"){

           return {
                ...state,
                cart:[]
           }
      }

        return state

}

export default cartReducer