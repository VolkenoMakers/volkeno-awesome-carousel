import React from 'react'

import { VolkenoCarousel } from 'volkeno-awesome-carousel'
import 'volkeno-awesome-carousel/dist/index.css'

const App = () => {
  let slides = [
    {
      img: <img src='https://picsum.photos/800/300/?random' alt='1' />,
      text: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
          viverra amet, morbi neque, venenatis est volutpat ipsum aliquam.
          Egestas habitant in metus, in leo gravida nunc nisl. Amet, amet sed
          porttitor ut felis. Eu aenean et cras duis faucibus eu. Rhoncus,
          euismod volutpat gravida in fermentum sollicitudin volutpat cursus.
          Elementum id scelerisque egestas nec pulvinar. Sed volutpat
          pellentesque pellentesque semper nisl, lectus sit. Sed.
        </p>
      ),
      author: <p>Adama Diakhaté</p>,
      subTitle: <p>Product manager</p>
    },
    {
      img: <img src='https://picsum.photos/800/301/?random' alt='2' />,
      text: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
          viverra amet, morbi neque, venenatis est volutpat ipsum aliquam.
          Egestas habitant in metus, in leo gravida nunc nisl. Amet, amet sed
          porttitor ut felis. Eu aenean et cras duis faucibus eu. Rhoncus,
          euismod volutpat gravida in fermentum sollicitudin volutpat cursus.
          Elementum id scelerisque egestas nec pulvinar. Sed volutpat
          pellentesque pellentesque semper nisl, lectus sit. Sed.
        </p>
      ),
      author: <p>Mbaye Niass</p>,
      subTitle: <p>Product manager</p>
    },
    {
      img: <img src='https://picsum.photos/800/302/?random' alt='3' />,
      text: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
          viverra amet, morbi neque, venenatis est volutpat ipsum aliquam.
          Egestas habitant in metus, in leo gravida nunc nisl. Amet, amet sed
          porttitor ut felis. Eu aenean et cras duis faucibus eu. Rhoncus,
          euismod volutpat gravida in fermentum sollicitudin volutpat cursus.
          Elementum id scelerisque egestas nec pulvinar. Sed volutpat
          pellentesque pellentesque semper nisl, lectus sit. Sed.
        </p>
      ),
      author: <p>Baba Sarr</p>,
      subTitle: <p>Product manager</p>
    },
    {
      img: <img src='https://picsum.photos/800/303/?random' alt='4' />,
      text: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
          viverra amet, morbi neque, venenatis est volutpat ipsum aliquam.
          Egestas habitant in metus, in leo gravida nunc nisl. Amet, amet sed
          porttitor ut felis. Eu aenean et cras duis faucibus eu. Rhoncus,
          euismod volutpat gravida in fermentum sollicitudin volutpat cursus.
          Elementum id scelerisque egestas nec pulvinar. Sed volutpat
          pellentesque pellentesque semper nisl, lectus sit. Sed.
        </p>
      ),
      author: <p>Babacar Mbengue</p>,
      subTitle: <p>Product manager</p>
    },
    {
      img: <img src='https://picsum.photos/800/304/?random' alt='5' />,
      text: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
          viverra amet, morbi neque, venenatis est volutpat ipsum aliquam.
          Egestas habitant in metus, in leo gravida nunc nisl. Amet, amet sed
          porttitor ut felis. Eu aenean et cras duis faucibus eu. Rhoncus,
          euismod volutpat gravida in fermentum sollicitudin volutpat cursus.
          Elementum id scelerisque egestas nec pulvinar. Sed volutpat
          pellentesque pellentesque semper nisl, lectus sit. Sed.
        </p>
      ),
      author: <p>Paul Gomis</p>,
      subTitle: <p>Product manager</p>
    }
  ]
  // console.log('slides', slides)
  const callback = function (index: any) {
    console.log('callback', index)
    // setSelectedIndex(index)
  }
  return (
    <VolkenoCarousel
      slides={slides}
      autoplay={false}
      onSlideChange={callback}
    />
  )
}

export default App
