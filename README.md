# volkeno-awesome-carousel

> Powerful, lightweight and fully customizable carousel component for React apps.

[![NPM](https://img.shields.io/npm/v/volkeno-awesome-carousel.svg)](https://www.npmjs.com/package/volkeno-awesome-carousel) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save volkeno-awesome-carousel
```

## Usage

```tsx
import React, { Component } from 'react'

import VolkenoCarousel from 'volkeno-awesome-carousel'
import 'volkeno-awesome-carousel/dist/index.css'

const Example = () => {

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
    const callback = function (index: any) {
    console.log('callback', index)
  }
    return (
        <VolkenoCarousel
            slides={slides}
            autoplay={false}
            onSlideChange={callback}
            interval={5000}
        />
    )

}
```

## Configuration - Props

| Property                 |   Type   | Require  |  Default | Description                                                                     |
| ------------------------ | :------: | :-----:  | :-------:| :------------------------------------------------------------------------------ |
| slides                   | array    |  true    |          |  text,img, author, subTitle                                                     |
| autoplay                 | boolean  |  false   | ...      |  autoplay slide                                                                 |
| interval                 | number   |  false   | 3000ms   |  time to move on to another slide                                               |
| onSlideChange            | callback |  ...     | ...      |  (onSlideChange) => void                                                        |

## License

MIT © [VolkenoMakers](https://github.com/VolkenoMakers)
