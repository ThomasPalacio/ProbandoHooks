import React from 'react'

export const Small = React.memo(({value}) => {
    console.log('ME LLAMASTE???');
  return (
    <small>
        {value}
    </small>
  )
})
