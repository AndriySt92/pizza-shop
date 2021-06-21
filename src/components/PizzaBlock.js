import React from 'react'
import { Pizza, LoadingPizzaBlock } from './index'

const PizzaBlock = ({ pizzas, addPizzaHandler, priceHandler, currentSortPopupCategory, currentCategory }) => {
  return (
    <div className="content__items">
      {pizzas
        ? pizzas.map((pizza) => {
            return (
              <Pizza
                {...pizza}
                key={pizza.id}
                addPizzaHandler={addPizzaHandler}
                priceHandler={priceHandler}
                currentSortPopupCategory={currentSortPopupCategory}
                currentCategory={currentCategory}
              />
            )
          })
        : Array(8)
            .fill(0)
            .map((_, index) => <LoadingPizzaBlock key={index} />)}
    </div>
  )
}

export default PizzaBlock
