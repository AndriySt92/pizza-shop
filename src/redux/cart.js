const ADDED_PIZZA = 'ADDED_PIZZA'
const CLEAR_CART = 'CLEAR_CART'
const PLUS_CART_PIZZA = 'PLUS_CART_PIZZA'
const MINUS_CART_PIZZA = 'MINUS_CART_PIZZA'
const REMOVE_CART_PIZZAS = 'REMOVE_CART_PIZZAS'

const initialState = {
  addedPizzas: {},
  totalCountAllPizzas: 0,
  totalPriceAllPizzas: 0,
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_PIZZA:
      
      let addedPizza = {}
      let totalCount = 0
      let totalPrice = 0

      if (state.addedPizzas[action.payload.key]) {
        addedPizza = state.addedPizzas[action.payload.key].item
        totalCount = state.addedPizzas[action.payload.key].totalCount + 1
        totalPrice = totalCount * action.payload.price
      } else {
        addedPizza = action.payload
        totalPrice = action.payload.price
        totalCount++
      }

      const currentAddedPizzas = {
        ...state.addedPizzas,
        [action.payload.key]: {
          item: addedPizza,
          totalCount,
          totalPrice,
        },
      }

      return {
        ...state,
        addedPizzas: currentAddedPizzas,
        totalCountAllPizzas: state.totalCountAllPizzas + 1,
        totalPriceAllPizzas: state.totalPriceAllPizzas + action.payload.price,
      }

    case PLUS_CART_PIZZA:

      let currentAddedPizzasPlus = {
        ...state.addedPizzas,
        [action.payload.key]: {
          ...state.addedPizzas[action.payload.key],
          totalCount: state.addedPizzas[action.payload.key].totalCount + 1,
          totalPrice: state.addedPizzas[action.payload.key].totalPrice + action.payload.price,
        },
      }

      return {
        ...state,
        addedPizzas: currentAddedPizzasPlus,
        totalCountAllPizzas: state.totalCountAllPizzas + 1,
        totalPriceAllPizzas: state.totalPriceAllPizzas + action.payload.price,
      }
    case MINUS_CART_PIZZA:

      let currentAddedPizzasMinus = {
        ...state.addedPizzas,
        [action.payload.key]: {
          ...state.addedPizzas[action.payload.key],
          totalCount: state.addedPizzas[action.payload.key].totalCount - 1,
          totalPrice: state.addedPizzas[action.payload.key].totalPrice - action.payload.price,
        },
      }

      return {
        ...state,
        addedPizzas: currentAddedPizzasMinus,
        totalCountAllPizzas: state.totalCountAllPizzas - 1,
        totalPriceAllPizzas: state.totalPriceAllPizzas - action.payload.price,
      }
    case REMOVE_CART_PIZZAS:
      let addedPizzas = state.addedPizzas

      let totalCountAllPizzas =
        state.totalCountAllPizzas - state.addedPizzas[action.payload.key].totalCount
      let totalPriceAllPizzas =
        state.totalPriceAllPizzas - state.addedPizzas[action.payload.key].totalPrice

      delete addedPizzas[action.payload.key]
      return {
        ...state,
        addedPizzas: addedPizzas,
        totalCountAllPizzas,
        totalPriceAllPizzas,
      }
    case CLEAR_CART:
      return {
        ...state,
        addedPizzas: {},
        totalCountAllPizzas: 0,
        totalPriceAllPizzas: 0,
      }
    default:
      return state
  }
}

export const setAddedPizza = (pizzaObj) => ({
  type: ADDED_PIZZA,
  payload: { ...pizzaObj },
})

export const minusCartItem = (key, price) => ({
  type: MINUS_CART_PIZZA,
  payload: { key, price },
})
export const plusCartItem = (key, price) => ({
  type: PLUS_CART_PIZZA,
  payload: { key, price },
})

export const removeCartItem = (key) => ({
  type: REMOVE_CART_PIZZAS,
  payload: { key },
})

export const clearCart = () => ({ type: CLEAR_CART })
export default cart
