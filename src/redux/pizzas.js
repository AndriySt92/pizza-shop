import { pizzaAPI } from '../API/API'
const SET_PIZZA = 'SET_PIZZA'
const SET_PRICE = 'SET_PRICE'

const initialState = {
  pizzas: null,
}

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case SET_PIZZA:
      return {
        ...state,
        pizzas: action.payload,
      }
    case SET_PRICE:
      const pizzas = state.pizzas.map((pizza) => {
        if (pizza.id === action.payload.id) {
          return { ...pizza, price: pizza.sizes[action.payload.size] }
        } else {
          return pizza
        }
      })
      return {
        ...state,
        pizzas: pizzas,
      }
    default:
      return state
  }
}

const setPizzas = (pizzas) => ({ type: SET_PIZZA, payload: pizzas })

export const setPrice = (id, size) => ({ type: SET_PRICE, payload: { id, size } })

export const requestPizzas =
  (currentCategory = null, sortBy) =>
  async (dispatch) => {
    let response = await pizzaAPI.getPizza(currentCategory, sortBy)

    dispatch(setPizzas(response))
  }
export default pizzas
