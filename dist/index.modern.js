import React, { useState, useRef, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import PropTypes from 'prop-types';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

var styles = {"test":"_3ybTi","container":"_1Lxpd","containerSlide":"_XBhrP","textualItem":"_1YSPp","selected":"_2tiFr","react3dCarousel":"_24jc0","sliderContainer":"_1ac0a","sliderContent":"_2TODB","sliderSingle":"_1Dlc_","sliderSingleContent":"_3c5V9","preactivede":"_1AkrP","preactive":"_3YTAI","proactive":"_2e5FE","proactivede":"_39-nr","active":"_3sodH","sliderLeft":"_2MbHb","sliderRight":"_1OwVg","sliderLeftNoborders":"_1-KfO","sliderRightNoborders":"_1O8RK","sliderDisabled":"_1aC52","textual-item":"_3hjNl","fa":"_2Rvwq","btn-control":"_3wWwt","textTemoignageClient":"_1FaWi","nomClientCarousel":"_yjxFL","libelleClientCarousel":"_1pFYk","carousselTextualContainer":"_3vmt1","heartbeat":"_2IKEy"};

var VolkenoCarousel = function VolkenoCarousel(props) {
  var _React$useState = React.useState(0),
      slideTotal = _React$useState[0],
      setSlideTotal = _React$useState[1];

  var _useState = useState(-1),
      slideCurrent = _useState[0],
      setSlideCurrent = _useState[1];

  var _useState2 = useState([]),
      slides = _useState2[0],
      setSlides = _useState2[1];

  var _useState3 = useState('0px'),
      height = _useState3[0],
      setHeight = _useState3[1];

  var intervalRef = useRef(null);
  var nextRef = useRef();
  var handlers = useSwipeable({
    onSwipedLeft: function onSwipedLeft() {
      return slideRight();
    },
    onSwipedRight: function onSwipedRight() {
      return slideLeft();
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
  useEffect(function () {
    var locSlides = [];
    props.slides.forEach(function (slide) {
      var slideobject = {
        "class": styles.sliderSingle + ' ' + styles.proactivede,
        element: slide === null || slide === void 0 ? void 0 : slide.img,
        text: slide === null || slide === void 0 ? void 0 : slide.text,
        author: slide === null || slide === void 0 ? void 0 : slide.author,
        subTitle: slide === null || slide === void 0 ? void 0 : slide.subTitle
      };
      locSlides.push(slideobject);
    });

    if (props.slides.length === 2) {
      props.slides.forEach(function (slide) {
        var slideobject = {
          "class": styles.sliderSingle + ' ' + styles.proactivede,
          element: slide === null || slide === void 0 ? void 0 : slide.img,
          text: slide === null || slide === void 0 ? void 0 : slide.text,
          author: slide === null || slide === void 0 ? void 0 : slide.author,
          subTitle: slide === null || slide === void 0 ? void 0 : slide.subTitle
        };
        locSlides.push(slideobject);
      });
    }

    setSlides(locSlides);
    setSlideTotal(locSlides.length - 1);
    setSlideCurrent(-1);

    if (slideCurrent === -1) {
      console.log('2', nextRef);
      setTimeout(function () {
        nextRef.current.click();

        if (props !== null && props !== void 0 && props.autoplay) {
          intervalRef.current = setTimeout(function () {
            nextRef.current.click();
          }, props === null || props === void 0 ? void 0 : props.interval);
        }
      }, 500);
    }
  }, [props.slides]);

  var slideRight = function slideRight() {
    try {
      var _slide$;

      var preactiveSlide;
      var proactiveSlide;
      var slideCurrentLoc = slideCurrent;
      var activeClass = styles.sliderSingle + ' ' + styles.active;
      var slide = [].concat(slides);

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

        var activeSlide = slide[slideCurrentLoc];
        (_document$getElements = document.getElementsByClassName(styles.textualItem + " " + styles.selected)[0]) === null || _document$getElements === void 0 ? void 0 : _document$getElements.classList.remove(styles.selected);
        var tested = document.querySelector("[data-target=item" + slideCurrentLoc + "]");
        tested === null || tested === void 0 ? void 0 : tested.classList.add(styles.selected);

        if (slideCurrentLoc < slideTotal) {
          proactiveSlide = slide[slideCurrentLoc + 1];
        } else {
          proactiveSlide = slide[0];
        }

        slide.forEach(function (slid) {
          var _slid$class, _slid$class2;

          if (slid !== null && slid !== void 0 && (_slid$class = slid["class"]) !== null && _slid$class !== void 0 && _slid$class.includes('preactivede')) {
            slid["class"] = styles.sliderSingle + ' ' + styles.proactivede;
          }

          if (slid !== null && slid !== void 0 && (_slid$class2 = slid["class"]) !== null && _slid$class2 !== void 0 && _slid$class2.includes('preactive')) {
            slid["class"] = styles.sliderSingle + ' ' + styles.preactivede;
          }
        });
        preactiveSlide["class"] = styles.sliderSingle + ' ' + styles.preactive;
        activeSlide["class"] = activeClass;
        proactiveSlide["class"] = styles.sliderSingle + ' ' + styles.proactive;
        setSlides(slide);
        setSlideCurrent(slideCurrentLoc);

        if (document.getElementsByClassName(styles.sliderSingle + " " + styles.active).length > 0) {
          setTimeout(function () {
            if (document.getElementsByClassName(styles.sliderSingle + " " + styles.active).length > 0) {
              var _document$getElements2;

              var _height = (_document$getElements2 = document.getElementsByClassName('slider-single active')[0]) === null || _document$getElements2 === void 0 ? void 0 : _document$getElements2.clientHeight;

              setHeight(_height + "px");
            }
          }, 100);
        }

        props.onSlideChange(slideCurrentLoc);

        if (props !== null && props !== void 0 && props.autoplay) {
          clearTimeout(intervalRef === null || intervalRef === void 0 ? void 0 : intervalRef.current);
          intervalRef.current = setTimeout(function () {
            nextRef.current.click();
          }, props === null || props === void 0 ? void 0 : props.interval);
        }
      } else if (slide[0] && ((_slide$ = slide[0]) === null || _slide$ === void 0 ? void 0 : _slide$["class"]) !== activeClass) {
        slide[0]["class"] = activeClass;
        setSlides(slide);
        setSlideCurrent(0);
      }

      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var slideLeft = function slideLeft() {
    if (slideTotal > 1) {
      var _document$getElements3, _document$getElements4;

      var preactiveSlide;
      var proactiveSlide;
      var slideCurrentLoc = slideCurrent;
      var slide = [].concat(slides);

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

      var activeSlide = slide[slideCurrentLoc];
      (_document$getElements3 = document.getElementsByClassName(styles.textualItem + " " + styles.selected)[0]) === null || _document$getElements3 === void 0 ? void 0 : _document$getElements3.classList.remove(styles.selected);
      var tested = document.querySelector("[data-target=item" + slideCurrentLoc + "]");
      tested === null || tested === void 0 ? void 0 : tested.classList.add(styles.selected);

      if (slideCurrentLoc > 0) {
        preactiveSlide = slide[slideCurrentLoc - 1];
      } else {
        preactiveSlide = slide[slideTotal];
      }

      slide.forEach(function (slid) {
        var _slid$class3;

        if (slid !== null && slid !== void 0 && (_slid$class3 = slid["class"]) !== null && _slid$class3 !== void 0 && _slid$class3.includes('proactivede')) {
          slid["class"] = styles.sliderSingle + ' ' + styles.preactivede;
        }

        if (slid["class"].includes('proactive')) {
          slid["class"] = styles.sliderSingle + ' ' + styles.proactivede;
        }
      });
      preactiveSlide["class"] = styles.sliderSingle + ' ' + styles.preactive;
      activeSlide["class"] = styles.sliderSingle + ' ' + styles.active;
      proactiveSlide["class"] = styles.sliderSingle + ' ' + styles.proactive;
      setSlides(slide);
      setSlideCurrent(slideCurrentLoc);
      props.onSlideChange(slideCurrentLoc);

      if (((_document$getElements4 = document.getElementsByClassName(styles.sliderSingle + " " + styles.active)) === null || _document$getElements4 === void 0 ? void 0 : _document$getElements4.length) > 0) {
        setTimeout(function () {
          if (document.getElementsByClassName(styles.sliderSingle + " " + styles.active).length > 0) ;
        }, 500);
      }
    }
  };

  var sliderClass = function sliderClass(direction) {
    var sliderClass = "slider" + direction;

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
    className: "" + styles.react3dCarousel,
    style: {
      height: height
    }
  }, handlers), slides && (slides === null || slides === void 0 ? void 0 : slides.length) > 0 ? React.createElement("div", {
    className: "" + styles.sliderContainer
  }, React.createElement("div", {
    className: "" + styles.sliderContent
  }, slides.map(function (slider, index) {
    return React.createElement("div", {
      className: "" + slider["class"],
      key: index
    }, React.createElement("div", {
      className: sliderClass('Left'),
      onClick: function onClick() {
        return slideLeft();
      }
    }, React.createElement("div", null, React.createElement(BsFillArrowLeftCircleFill, {
      color: 'black',
      className: 'fa fa-arrow-left'
    }))), React.createElement("div", {
      className: sliderClass('Right'),
      onClick: function onClick() {
        return slideRight();
      },
      ref: nextRef
    }, React.createElement("div", null, React.createElement(BsFillArrowRightCircleFill, {
      color: 'black',
      className: 'fa fa-arrow-right'
    }))), React.createElement("div", {
      className: "" + styles.sliderSingleContent
    }, slider === null || slider === void 0 ? void 0 : slider.element));
  }))) : null)), React.createElement("div", {
    className: styles.containerSlide
  }, React.createElement("div", {
    className: styles.carousselTextualContainer
  }, React.createElement("div", {
    className: 'caroussel-textual-item-container'
  }, slides && (slides === null || slides === void 0 ? void 0 : slides.length) > 0 ? slides.map(function (slide, index) {
    return React.createElement("div", {
      "data-target": "item" + index,
      className: styles.textualItem,
      key: index
    }, React.createElement("div", {
      className: 'bloc-flex-img-text'
    }, React.createElement("div", {
      className: 'div-inherit-position div-inherit-position-icon'
    }, React.createElement("img", {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRownDK1FO2rR4meptR5JHo68P58TQLUp8Zkw&usqp=CAU',
      alt: 'Carousel Client',
      className: slide["class"],
      width: '50'
    })), React.createElement("div", {
      className: 'div-inherit-position div-inherit-position-text'
    }, React.createElement("p", {
      className: styles.textTemoignageClient
    }, slide === null || slide === void 0 ? void 0 : slide.text))), React.createElement("p", {
      className: styles.nomClientCarousel
    }, slide === null || slide === void 0 ? void 0 : slide.author), React.createElement("p", {
      className: styles.libelleClientCarousel
    }, slide === null || slide === void 0 ? void 0 : slide.subTitle));
  }) : null))));
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
  onSlideChange: function onSlideChange() {}
};

export { VolkenoCarousel };
//# sourceMappingURL=index.modern.js.map
