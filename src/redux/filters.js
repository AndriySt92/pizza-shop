const SET_CATEGORY = 'CHANGE_CATEGORY'
const SET_CURRENT_SORT_POPUP_CATEGORY = 'SET_CURRENT_SORT_POPUP_CATEGORY'
const SET_SORT_BY = 'SET_SORT_BY'

const initialState = {
  categoriesList: ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
  currentCategory: null,
  sortPopupCategoriesList: [
    { name: 'популярности', type: 'rating', order: 'desc' },
    { name: 'алфавите', type: 'name', order: 'asc' },
    { name: 'цене', type: 'price', order: 'asc' },
  ],
  currentSortPopupCategory: 0,
  sortBy: {
    type: 'rating',
    order: 'desc',
  },
}

const filters = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload.index,
      }
    case SET_CURRENT_SORT_POPUP_CATEGORY:
      return {
        ...state,
        currentSortPopupCategory: action.payload.index,
      }
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      }
    default:
      return state
  }
}

export const setCategory = (index) => ({ type: SET_CATEGORY, payload: { index } })
export const setCurrentSortPopupCategory = (index) => ({
  type: SET_CURRENT_SORT_POPUP_CATEGORY,
  payload: { index },
})
export const setSortBy = (type, order) => ({ type: SET_SORT_BY, payload: { type, order } })

export default filters
