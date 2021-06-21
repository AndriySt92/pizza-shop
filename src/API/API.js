import axios from 'axios'


export const pizzaAPI = {
    getPizza:(currentCategory, sortBy) => {
        return axios.get(
        `/pizzas?${
          currentCategory == null ? '' : `category=${currentCategory}`
        }&_sort=${sortBy.type}&_order=${sortBy.order}`,
      )
      .then((res) => res.data)
    }
}