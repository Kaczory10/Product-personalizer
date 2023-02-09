import PropTypes from 'prop-types';
import styles from './OptionColor.module.scss';
import clsx from "clsx";

const OptionColor = ({ colors, selectedColor, setSelectedColor }) => {
    return (
        <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
          {colors.map((color) => (
            <li key={color}>
              <button
                type="button"
                className={clsx(
                  styles[
                    `color${color.charAt(0).toUpperCase() + color.slice(1)}`
                  ],
                  color === selectedColor ? styles.active : ""
                )}
                onClick={() => setSelectedColor(color)}
              ></button>
            </li>
          ))}
        </ul>
      </div>
    )
}

OptionColor.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string),
    selectedColor: PropTypes.string,
    setSelectedColor: PropTypes.func,
}

export default OptionColor;