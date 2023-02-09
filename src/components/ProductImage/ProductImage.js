import styles from './ProductImage.module.scss';
import PropTypes from "prop-types";

const ProductImage = ({ color, name, title }) => {
    return (
        <div className={styles.imageContainer}>
            <img
            className={styles.image}
            alt={ title }
            src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${color}.jpg`}
            />
        </div>
    )
}

ProductImage.propTypes = {
    color: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
}

export default ProductImage;