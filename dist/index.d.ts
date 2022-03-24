import PropTypes from 'prop-types';
export declare const VolkenoCarousel: {
    (props: any): JSX.Element;
    propTypes: {
        slides: PropTypes.Requireable<(PropTypes.ReactElementLike | null | undefined)[]>;
        autoplay: PropTypes.Requireable<boolean>;
        interval: PropTypes.Requireable<number>;
        arrows: PropTypes.Requireable<boolean>;
        arrowBorders: PropTypes.Requireable<boolean>;
        onSlideChange: PropTypes.Requireable<(...args: any[]) => any>;
    };
    defaultProps: {
        autoplay: boolean;
        interval: number;
        arrows: boolean;
        arrowBorders: boolean;
        onSlideChange: () => void;
    };
};
