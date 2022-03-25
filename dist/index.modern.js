import React, { useState, useRef, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import PropTypes from 'prop-types';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

var styles = {"test":"_styles-module__test__3ybTi","container":"_styles-module__container__1Lxpd","containerSlide":"_styles-module__containerSlide__XBhrP","textualItem":"_styles-module__textualItem__1YSPp","selected":"_styles-module__selected__2tiFr","react3dCarousel":"_styles-module__react3dCarousel__24jc0","sliderContainer":"_styles-module__sliderContainer__1ac0a","sliderContent":"_styles-module__sliderContent__2TODB","sliderSingle":"_styles-module__sliderSingle__1Dlc_","sliderSingleContent":"_styles-module__sliderSingleContent__3c5V9","preactivede":"_styles-module__preactivede__1AkrP","preactive":"_styles-module__preactive__3YTAI","proactive":"_styles-module__proactive__2e5FE","proactivede":"_styles-module__proactivede__39-nr","active":"_styles-module__active__3sodH","sliderLeft":"_styles-module__sliderLeft__2MbHb","sliderRight":"_styles-module__sliderRight__1OwVg","sliderLeftNoborders":"_styles-module__sliderLeftNoborders__1-KfO","sliderRightNoborders":"_styles-module__sliderRightNoborders__1O8RK","sliderDisabled":"_styles-module__sliderDisabled__1aC52","textual-item":"_styles-module__textual-item__3hjNl","fa":"_styles-module__fa__2Rvwq","btn-control":"_styles-module__btn-control__3wWwt","heartbeat":"_styles-module__heartbeat__2IKEy"};

const VolkenoCarousel = props => {
  const [slideTotal, setSlideTotal] = React.useState(0);
  const [slideCurrent, setSlideCurrent] = useState(-1);
  const [slides, setSlides] = useState([]);
  const [height, setHeight] = useState('0px');
  const intervalRef = useRef(null);
  const nextRef = useRef();
  const handlers = useSwipeable({
    onSwipedLeft: () => slideRight(),
    onSwipedRight: () => slideLeft(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
  useEffect(() => {
    const locSlides = [];
    props.slides.forEach(slide => {
      const slideobject = {
        class: styles.sliderSingle + ' ' + styles.proactivede,
        element: slide === null || slide === void 0 ? void 0 : slide.img,
        text: slide === null || slide === void 0 ? void 0 : slide.text
      };
      locSlides.push(slideobject);
    });

    if (props.slides.length === 2) {
      props.slides.forEach(slide => {
        const slideobject = {
          class: styles.sliderSingle + ' ' + styles.proactivede,
          element: slide === null || slide === void 0 ? void 0 : slide.img,
          text: slide === null || slide === void 0 ? void 0 : slide.text
        };
        locSlides.push(slideobject);
      });
    }

    setSlides(locSlides);
    setSlideTotal(locSlides.length - 1);
    setSlideCurrent(-1);

    if (slideCurrent === -1) {
      console.log('2', nextRef);
      setTimeout(() => {
        nextRef.current.click();

        if (props !== null && props !== void 0 && props.autoplay) {
          intervalRef.current = setTimeout(() => {
            nextRef.current.click();
          }, props === null || props === void 0 ? void 0 : props.interval);
        }
      }, 500);
    }
  }, [props.slides]);

  const slideRight = async () => {
    var _slide$;

    let preactiveSlide;
    let proactiveSlide;
    let slideCurrentLoc = slideCurrent;
    const activeClass = styles.sliderSingle + ' ' + styles.active;
    const slide = [...slides];

    if (slideTotal > 1) {
      var _document$getElements;

      if (slideCurrentLoc < slideTotal) {
        slideCurrentLoc++;
      } else {
        slideCurrentLoc = 0;
      }

      if (slideCurrentLoc > 0) {
        preactiveSlide = slide[slideCurrentLoc - 1];
      } else {
        preactiveSlide = slide[slideTotal];
      }

      const activeSlide = slide[slideCurrentLoc];
      (_document$getElements = document.getElementsByClassName(`${styles.textualItem} ${styles.selected}`)[0]) === null || _document$getElements === void 0 ? void 0 : _document$getElements.classList.remove(styles.selected);
      const tested = document.querySelector(`[data-target=item${slideCurrentLoc}]`);
      tested === null || tested === void 0 ? void 0 : tested.classList.add(styles.selected);

      if (slideCurrentLoc < slideTotal) {
        proactiveSlide = slide[slideCurrentLoc + 1];
      } else {
        proactiveSlide = slide[0];
      }

      slide.forEach(slid => {
        var _slid$class, _slid$class2;

        if (slid !== null && slid !== void 0 && (_slid$class = slid.class) !== null && _slid$class !== void 0 && _slid$class.includes('preactivede')) {
          slid.class = styles.sliderSingle + ' ' + styles.proactivede;
        }

        if (slid !== null && slid !== void 0 && (_slid$class2 = slid.class) !== null && _slid$class2 !== void 0 && _slid$class2.includes('preactive')) {
          slid.class = styles.sliderSingle + ' ' + styles.preactivede;
        }
      });
      preactiveSlide.class = styles.sliderSingle + ' ' + styles.preactive;
      activeSlide.class = activeClass;
      proactiveSlide.class = styles.sliderSingle + ' ' + styles.proactive;
      setSlides(slide);
      setSlideCurrent(slideCurrentLoc);

      if (document.getElementsByClassName(`${styles.sliderSingle} ${styles.active}`).length > 0) {
        setTimeout(() => {
          if (document.getElementsByClassName(`${styles.sliderSingle} ${styles.active}`).length > 0) {
            var _document$getElements2;

            const height = (_document$getElements2 = document.getElementsByClassName('slider-single active')[0]) === null || _document$getElements2 === void 0 ? void 0 : _document$getElements2.clientHeight;
            setHeight(`${height}px`);
          }
        }, 100);
      }

      props.onSlideChange(slideCurrentLoc);

      if (props !== null && props !== void 0 && props.autoplay) {
        clearTimeout(intervalRef === null || intervalRef === void 0 ? void 0 : intervalRef.current);
        intervalRef.current = setTimeout(() => {
          nextRef.current.click();
        }, props === null || props === void 0 ? void 0 : props.interval);
      }
    } else if (slide[0] && ((_slide$ = slide[0]) === null || _slide$ === void 0 ? void 0 : _slide$.class) !== activeClass) {
      slide[0].class = activeClass;
      setSlides(slide);
      setSlideCurrent(0);
    }
  };

  const slideLeft = () => {
    if (slideTotal > 1) {
      var _document$getElements3, _document$getElements4;

      let preactiveSlide;
      let proactiveSlide;
      let slideCurrentLoc = slideCurrent;
      const slide = [...slides];

      if (slideCurrentLoc > 0) {
        slideCurrentLoc--;
      } else {
        slideCurrentLoc = slideTotal;
      }

      if (slideCurrentLoc < slideTotal) {
        proactiveSlide = slide[slideCurrentLoc + 1];
      } else {
        proactiveSlide = slide[0];
      }

      const activeSlide = slide[slideCurrentLoc];
      (_document$getElements3 = document.getElementsByClassName(`${styles.textualItem} ${styles.selected}`)[0]) === null || _document$getElements3 === void 0 ? void 0 : _document$getElements3.classList.remove(styles.selected);
      const tested = document.querySelector(`[data-target=item${slideCurrentLoc}]`);
      tested === null || tested === void 0 ? void 0 : tested.classList.add(styles.selected);

      if (slideCurrentLoc > 0) {
        preactiveSlide = slide[slideCurrentLoc - 1];
      } else {
        preactiveSlide = slide[slideTotal];
      }

      slide.forEach(slid => {
        var _slid$class3;

        if (slid !== null && slid !== void 0 && (_slid$class3 = slid.class) !== null && _slid$class3 !== void 0 && _slid$class3.includes('proactivede')) {
          slid.class = styles.sliderSingle + ' ' + styles.preactivede;
        }

        if (slid.class.includes('proactive')) {
          slid.class = styles.sliderSingle + ' ' + styles.proactivede;
        }
      });
      preactiveSlide.class = styles.sliderSingle + ' ' + styles.preactive;
      activeSlide.class = styles.sliderSingle + ' ' + styles.active;
      proactiveSlide.class = styles.sliderSingle + ' ' + styles.proactive;
      setSlides(slide);
      setSlideCurrent(slideCurrentLoc);
      props.onSlideChange(slideCurrentLoc);

      if (((_document$getElements4 = document.getElementsByClassName(`${styles.sliderSingle} ${styles.active}`)) === null || _document$getElements4 === void 0 ? void 0 : _document$getElements4.length) > 0) {
        setTimeout(() => {
          if (document.getElementsByClassName(`${styles.sliderSingle} ${styles.active}`).length > 0) ;
        }, 500);
      }
    }
  };

  const sliderClass = direction => {
    let sliderClass = `slider${direction}`;

    if (direction === 'Right') {
      sliderClass = styles.sliderRight;
    }

    if (direction === 'Left') {
      sliderClass = styles.sliderLeft;
    }

    if (!(props !== null && props !== void 0 && props.arrows)) {
      sliderClass = styles.sliderDisabled;
    } else if (props !== null && props !== void 0 && props.arrows && !(props !== null && props !== void 0 && props.arrowBorders)) {
      if (direction === 'Right') {
        sliderClass = styles.sliderRightNoborders;
      }

      if (direction === 'Left') {
        sliderClass = styles.sliderLeftNoborders;
      }
    }

    return sliderClass;
  };

  return React.createElement("div", {
    className: styles.container
  }, React.createElement("div", {
    className: styles.containerSlide
  }, React.createElement("div", Object.assign({
    className: `${styles.react3dCarousel}`,
    style: {
      height
    }
  }, handlers), slides && (slides === null || slides === void 0 ? void 0 : slides.length) > 0 ? React.createElement("div", {
    className: `${styles.sliderContainer}`
  }, React.createElement("div", {
    className: `${styles.sliderContent}`
  }, slides.map((slider, index) => React.createElement("div", {
    className: `${slider.class}`,
    key: index
  }, React.createElement("div", {
    className: sliderClass('Left'),
    onClick: () => slideLeft()
  }, React.createElement("div", null, React.createElement(BsFillArrowLeftCircleFill, {
    color: 'black',
    className: 'fa fa-arrow-left'
  }))), React.createElement("div", {
    className: sliderClass('Right'),
    onClick: () => slideRight(),
    ref: nextRef
  }, React.createElement("div", null, React.createElement(BsFillArrowRightCircleFill, {
    color: 'black',
    className: 'fa fa-arrow-right'
  }))), React.createElement("div", {
    className: `${styles.sliderSingleContent}`
  }, slider === null || slider === void 0 ? void 0 : slider.element))))) : null)), React.createElement("div", {
    className: styles.containerSlide
  }, React.createElement("div", {
    className: 'caroussel-textual-container'
  }, React.createElement("div", {
    className: 'caroussel-textual-item-container'
  }, slides && (slides === null || slides === void 0 ? void 0 : slides.length) > 0 ? slides.map((slide, index) => React.createElement("div", {
    "data-target": `item${index}`,
    className: styles.textualItem,
    key: index
  }, React.createElement("div", {
    className: 'bloc-flex-img-text'
  }, React.createElement("div", {
    className: 'div-inherit-position div-inherit-position-text'
  }, React.createElement("p", {
    className: 'text-temoignage-client'
  }, slide === null || slide === void 0 ? void 0 : slide.text))))) : null))));
};
VolkenoCarousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object),
  autoplay: PropTypes.bool,
  interval: PropTypes.number,
  arrows: PropTypes.bool,
  arrowBorders: PropTypes.bool,
  onSlideChange: PropTypes.func
};
VolkenoCarousel.defaultProps = {
  autoplay: false,
  interval: 3000,
  arrows: true,
  arrowBorders: true,
  onSlideChange: function () {}
};

export { VolkenoCarousel };
//# sourceMappingURL=index.modern.js.map
