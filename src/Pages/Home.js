import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Categories, SortPopup, PizzaBlock} from '../components/index'
import { setCategory, setCurrentSortPopupCategory, setSortBy } from '../redux/filters'
import { requestPizzas, setPrice } from '../redux/pizzas'
import { setAddedPizza } from '../redux/cart'

const Home = () => {
  const {
    categoriesList,
    currentCategory,
    sortBy,
    sortPopupCategoriesList,
    currentSortPopupCategory,
  } = useSelector(({ filters }) => filters)
  const pizzas = useSelector(({ pizzas }) => pizzas.pizzas)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestPizzas(currentCategory, sortBy))
  }, [currentCategory, sortBy])

  const categoriesHandler = useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  const sortPopupCategoriesHandler = useCallback((index, type, order) => {
    dispatch(setCurrentSortPopupCategory(index))
    dispatch(setSortBy(type, order))
  }, [])

  const priceHandler = (id, size) => {
    dispatch(setPrice(id, size))
  }

  const addPizzaHandler = (pizzaObj) => {
    dispatch(setAddedPizza(pizzaObj))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          categoriesList={categoriesList}
          currentCategory={currentCategory}
          categoriesHandler={categoriesHandler}
        />
        <SortPopup
          sortPopupCategoriesList={sortPopupCategoriesList}
          currentSortPopupCategory={currentSortPopupCategory}
          sortPopupCategoriesHandler={sortPopupCategoriesHandler}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <PizzaBlock
        pizzas={pizzas}
        addPizzaHandler={addPizzaHandler}
        priceHandler={priceHandler}
        currentSortPopupCategory={currentSortPopupCategory}
        currentCategory={currentCategory}
      />
    </div>
  )
}

export default Home
