import PropTypes from "prop-types";
import styles from './OptionSize.module.scss';

const OptionSize = ({ sizes, selectedSize, setSelectedSize }) => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {sizes.map((size) => (
          <li key={size.name}>
            <button
              type="button"
              className={size.name === selectedSize?.name ? styles.active : ""}
              onClick={() => setSelectedSize(size)}
            >
              {size.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

OptionSize.propTypes = {
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
};

export default OptionSize;