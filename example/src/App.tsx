import React from 'react'

import { VolkenoCarousel } from 'volkeno-awesome-carousel'
import 'volkeno-awesome-carousel/dist/index.css'

const App = () => {
  let slides = [
    <img src='https://picsum.photos/800/300/?random' alt='1' />,
    <img src='https://picsum.photos/800/301/?random' alt='2' />,
    <img src='https://picsum.photos/800/302/?random' alt='3' />,
    <img src='https://picsum.photos/800/303/?random' alt='4' />,
    <img src='https://picsum.photos/800/304/?random' alt='5' />
  ]
  // console.log('slides', slides)
  const callback = function (index: any) {
    console.log('callback', index)
    // setSelectedIndex(index)
  }
  return <VolkenoCarousel slides={slides} autoplay={true} onSlideChange={callback} />
}

export default App
