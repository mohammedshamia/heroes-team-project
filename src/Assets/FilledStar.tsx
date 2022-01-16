import React from 'react'
const FilledStar = ({ onClick, color }: any) => {
  return (
    <svg onClick={onClick} width="20px" fill= {color} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
  )
}

export default FilledStar