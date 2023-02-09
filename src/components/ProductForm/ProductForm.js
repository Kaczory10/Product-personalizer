import PropTypes from "prop-types";
import styles from './ProductForm.module.scss';
import Button from "../Button/Button";
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from "../OptionColor/OptionColor";

const ProductForm = ({
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
  sizes,
  colors,
  addToCart
}) => {
  return (
    <form onSubmit={(event) => addToCart(event)}>
      <OptionSize 
        selectedSize={ selectedSize }
        setSelectedSize={ setSelectedSize }
        sizes={ sizes }
      />
      <OptionColor 
        selectedColor={ selectedColor }
        setSelectedColor={ setSelectedColor }
        colors={ colors }
      />
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  selectedColor: PropTypes.string,
  setSelectedColor: PropTypes.func,
  selectedSize: PropTypes.shape({
    name: PropTypes.string,
    additionalPrice: PropTypes.number,
  }),
  setSelectedSize: PropTypes.func,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      additionalPrice: PropTypes.number,
    })
  ),
  colors: PropTypes.arrayOf(PropTypes.string),
  addToCart: PropTypes.func,
};

export default ProductForm;