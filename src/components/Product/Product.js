import styles from "./Product.module.scss";
import PropTypes from "prop-types";
import ProductImage from "../ProductImage/ProductImage";
import { useEffect, useMemo, useState } from "react";
import ProductForm from "../ProductForm/ProductForm";

const Product = ({ title, basePrice, colors, sizes, name }) => {
  const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState();

  useEffect(() => {
    setSelectedColor(colors[0]);
    setSelectedSize(sizes[0]);
  }, []);

  const calculatedPrice = useMemo(() => {
    return selectedSize?.additionalPrice + basePrice;
  }, [selectedSize, basePrice]);

  const addToCart = (event) => {
    event.preventDefault();

    console.log('Summary');
    console.log('===========');
    console.log(`Name: ${title}`);
    console.log(`Price: ${calculatedPrice}`);
    console.log(`Size: ${selectedSize.name}`);
    console.log(`Color: ${selectedColor}`);
  }

  return (
    <article className={styles.product}>
      <ProductImage 
        color={ selectedColor }
        name={ name }
        title={ title }
      />
      <div>
        <header>
          <h2 className={title}>{ title }</h2>

          <span className={basePrice}>Price: { calculatedPrice }$</span>
        </header>
        <ProductForm 
          colors={ colors }
          sizes={ sizes }
          selectedColor={ selectedColor }
          setSelectedColor={ setSelectedColor }
          selectedSize={ selectedSize }
          setSelectedSize={ setSelectedSize }
          addToCart={ addToCart }
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  basePrice: PropTypes.number,
  title: PropTypes.string,
  name: PropTypes.string,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      additionalPrice: PropTypes.number,
    })
  ),
  colors: PropTypes.arrayOf(PropTypes.string),
};

export default Product;
