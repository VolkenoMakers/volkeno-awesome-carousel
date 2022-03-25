/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react'
import { useSwipeable } from 'react-swipeable'
import PropTypes from 'prop-types'
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill
} from 'react-icons/bs'
import styles from './styles.module.css'

export const VolkenoCarousel = (props: any) => {
  const [slideTotal, setSlideTotal] = React.useState<any>(0)
  const [slideCurrent, setSlideCurrent] = useState<any>(-1)
  const [slides, setSlides] = useState<any>([])
  const [height, setHeight] = useState<any>('0px')
  const intervalRef = useRef<any>(null)
  const nextRef = useRef<any>()
  const handlers = useSwipeable({
    onSwipedLeft: () => slideRight(),
    onSwipedRight: () => slideLeft(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  })
  useEffect(() => {
    const locSlides: any = []

    props.slides.forEach((slide: any) => {
      const slideobject: any = {
        class: styles.sliderSingle + ' ' + styles.proactivede,
        element: slide?.img,
        text: slide?.text
      }
      locSlides.push(slideobject)
    })
    if (props.slides.length === 2) {
      props.slides.forEach((slide: any) => {
        const slideobject = {
          class: styles.sliderSingle + ' ' + styles.proactivede,
          element: slide?.img,
          text: slide?.text
        }
        locSlides.push(slideobject)
      })
    }
    setSlides(locSlides)
    setSlideTotal(locSlides.length - 1)
    setSlideCurrent(-1)
    if (slideCurrent === -1) {
      console.log('2', nextRef)
      setTimeout(() => {
        nextRef.current.click()
        if (props?.autoplay) {
          intervalRef.current = setTimeout(() => {
            nextRef.current.click()
          }, props?.interval)
        }
      }, 500)
    }
  }, [props.slides])

  const slideRight = async () => {
    let preactiveSlide: any
    let proactiveSlide: any
    let slideCurrentLoc = slideCurrent

    const activeClass: any = styles.sliderSingle + ' ' + styles.active
    const slide = [...slides]

    if (slideTotal > 1) {
      if (slideCurrentLoc < slideTotal) {
        slideCurrentLoc++
      } else {
        slideCurrentLoc = 0
      }
      if (slideCurrentLoc > 0) {
        preactiveSlide = slide[slideCurrentLoc - 1]
      } else {
        preactiveSlide = slide[slideTotal]
      }

      const activeSlide = slide[slideCurrentLoc]
      document
        .getElementsByClassName(`${styles.textualItem} ${styles.selected}`)[0]
        ?.classList.remove(styles.selected)
      // doc[0]?.classList.remove(styles.selected)
      const tested = document.querySelector(
        `[data-target=item${slideCurrentLoc}]`
      )
      tested?.classList.add(styles.selected)
      // console.log(doc, 'test', 'tested', tested)
      if (slideCurrentLoc < slideTotal) {
        proactiveSlide = slide[slideCurrentLoc + 1]
      } else {
        proactiveSlide = slide[0]
      }
      slide.forEach((slid: any) => {
        // console.log('slid', slid?.class.includes('proactivede'))
        if (slid?.class?.includes('preactivede')) {
          slid.class = styles.sliderSingle + ' ' + styles.proactivede
        }
        if (slid?.class?.includes('preactive')) {
          slid.class = styles.sliderSingle + ' ' + styles.preactivede
        }
      })

      preactiveSlide.class = styles.sliderSingle + ' ' + styles.preactive
      activeSlide.class = activeClass
      proactiveSlide.class = styles.sliderSingle + ' ' + styles.proactive
      setSlides(slide)
      setSlideCurrent(slideCurrentLoc)
      if (
        document.getElementsByClassName(
          `${styles.sliderSingle} ${styles.active}`
        ).length > 0
      ) {
        setTimeout(() => {
          if (
            document.getElementsByClassName(
              `${styles.sliderSingle} ${styles.active}`
            ).length > 0
          ) {
            const height = document.getElementsByClassName(
              'slider-single active'
            )[0]?.clientHeight
            setHeight(`${height}px`)
          }
        }, 100)
      }
      props.onSlideChange(slideCurrentLoc)
      if (props?.autoplay) {
        clearTimeout(intervalRef?.current)
        intervalRef.current = setTimeout(() => {
          nextRef.current.click()
        }, props?.interval)
      }
    } else if (slide[0] && slide[0]?.class !== activeClass) {
      slide[0].class = activeClass
      setSlides(slide)
      setSlideCurrent(0)
    }
  }

  const slideLeft = () => {
    if (slideTotal > 1) {
      let preactiveSlide
      let proactiveSlide
      let slideCurrentLoc: any = slideCurrent
      const slide = [...slides]
      if (slideCurrentLoc > 0) {
        slideCurrentLoc--
      } else {
        slideCurrentLoc = slideTotal
      }

      if (slideCurrentLoc < slideTotal) {
        proactiveSlide = slide[slideCurrentLoc + 1]
      } else {
        proactiveSlide = slide[0]
      }
      const activeSlide = slide[slideCurrentLoc]
      document
        .getElementsByClassName(`${styles.textualItem} ${styles.selected}`)[0]
        ?.classList.remove(styles.selected)
      // doc[0]?.classList.remove(styles.selected)
      const tested = document.querySelector(
        `[data-target=item${slideCurrentLoc}]`
      )
      tested?.classList.add(styles.selected)
      if (slideCurrentLoc > 0) {
        preactiveSlide = slide[slideCurrentLoc - 1]
      } else {
        preactiveSlide = slide[slideTotal]
      }
      slide.forEach((slid) => {
        if (slid?.class?.includes('proactivede')) {
          slid.class = styles.sliderSingle + ' ' + styles.preactivede
        }
        if (slid.class.includes('proactive')) {
          slid.class = styles.sliderSingle + ' ' + styles.proactivede
        }
      })
      preactiveSlide.class = styles.sliderSingle + ' ' + styles.preactive
      activeSlide.class = styles.sliderSingle + ' ' + styles.active
      proactiveSlide.class = styles.sliderSingle + ' ' + styles.proactive
      setSlides(slide)
      setSlideCurrent(slideCurrentLoc)
      props.onSlideChange(slideCurrentLoc)
      if (
        document.getElementsByClassName(
          `${styles.sliderSingle} ${styles.active}`
        )?.length > 0
      ) {
        setTimeout(() => {
          if (
            document.getElementsByClassName(
              `${styles.sliderSingle} ${styles.active}`
            ).length > 0
          ) {
            // const height = document.getElementsByClassName(
            //   'slider-single active'
            // )[0].clientHeight
            // setHeight(`${height}px`)
          }
        }, 500)
      }
    }
  }

  const sliderClass = (direction: any) => {
    let sliderClass = `slider${direction}`
    if (direction === 'Right') {
      sliderClass = styles.sliderRight
    }
    if (direction === 'Left') {
      sliderClass = styles.sliderLeft
    }
    if (!props?.arrows) {
      sliderClass = styles.sliderDisabled
    } else if (props?.arrows && !props?.arrowBorders) {
      if (direction === 'Right') {
        sliderClass = styles.sliderRightNoborders
      }
      if (direction === 'Left') {
        sliderClass = styles.sliderLeftNoborders
      }
    }

    return sliderClass
  }

  //   console.log("slides", slides);

  return (
    <div className={styles.container}>
      <div className={styles.containerSlide}>
        <div
          className={`${styles.react3dCarousel}`}
          style={{ height }}
          {...handlers}
        >
          {slides && slides?.length > 0 ? (
            <div className={`${styles.sliderContainer}`}>
              <div className={`${styles.sliderContent}`}>
                {slides.map((slider: any, index: any) => (
                  <div className={`${slider.class}`} key={index}>
                    <div
                      className={sliderClass('Left')}
                      onClick={() => slideLeft()}
                    >
                      <div>
                        <BsFillArrowLeftCircleFill
                          color='black'
                          className='fa fa-arrow-left'
                        />
                      </div>
                    </div>
                    <div
                      className={sliderClass('Right')}
                      onClick={() => slideRight()}
                      ref={nextRef}
                    >
                      <div>
                        <BsFillArrowRightCircleFill
                          color='black'
                          className='fa fa-arrow-right'
                        />
                      </div>
                    </div>

                    <div className={`${styles.sliderSingleContent}`}>
                      {slider?.element}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className={styles.containerSlide}>
        <div className='caroussel-textual-container'>
          <div className='caroussel-textual-item-container'>
            {slides && slides?.length > 0
              ? slides.map((slide: any, index: number) => (
                  <div
                    data-target={`item${index}`}
                    className={styles.textualItem}
                    key={index}
                  >
                    <div className='bloc-flex-img-text'>
                      {/* <div className='div-inherit-position div-inherit-position-icon'>
                        <img
                          src='https://picsum.photos/800/300/?random'
                          alt='Carousel Client'
                          className={slide.class}
                          width='50'
                        />
                      </div> */}
                      <div className='div-inherit-position div-inherit-position-text'>
                        <p className='text-temoignage-client'>{slide?.text}</p>
                      </div>
                    </div>
                    {/* <p className='nom-client-carousel'>
                      Adama Diakhaté {`item${index}`}
                    </p>
                    <p className='libelle-client-carousel'> {`item${index}`}</p> */}
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  )
}

VolkenoCarousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object),
  autoplay: PropTypes.bool,
  interval: PropTypes.number,
  arrows: PropTypes.bool,
  arrowBorders: PropTypes.bool,
  onSlideChange: PropTypes.func
}
VolkenoCarousel.defaultProps = {
  autoplay: false,
  interval: 3000,
  arrows: true,
  arrowBorders: true,
  onSlideChange: function () {}
}
