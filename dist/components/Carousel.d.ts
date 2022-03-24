import PropTypes from 'prop-types';
import '../styles.scss';
import '../styles.module.css';
declare function Carousel(props: any): JSX.Element;
declare namespace Carousel {
    var propTypes: {
        slides: PropTypes.Requireable<(PropTypes.ReactElementLike | null | undefined)[]>;
        autoplay: PropTypes.Requireable<boolean>;
        interval: PropTypes.Requireable<number>;
        arrows: PropTypes.Requireable<boolean>;
        arrowBorders: PropTypes.Requireable<boolean>;
        onSlideChange: PropTypes.Requireable<(...args: any[]) => any>;
    };
    var defaultProps: {
        autoplay: boolean;
        interval: number;
        arrows: boolean;
        arrowBorders: boolean;
        onSlideChange: () => void;
    };
}
export default Carousel;
