import React from 'react'
import cn from 'classnames'

const Categories = React.memo(({ categoriesList, currentCategory, categoriesHandler }) => {
 
  return (
    <div className="categories">
      <ul>
        <li
          className={cn({ active: currentCategory === null })}
          onClick={() => categoriesHandler(null)}>
          Все
        </li>
        {categoriesList.map((item, index) => (
          <li
            key={`${item}_${index}`}
            onClick={() => categoriesHandler(index)}
            className={cn({ active: currentCategory === index })}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
})

export default Categories
