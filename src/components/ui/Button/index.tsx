import React, { ReactNode, ButtonHTMLAttributes } from "react";
import { FaSpinner } from "react-icons/fa";
import styles from "./style.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: ReactNode;
}

const Button = ({ loading, children, ...rest }: ButtonProps) => {
  return (
    <button className={styles.button} disabled={loading} {...rest}>
      {loading ? (
        <FaSpinner color="#fff" size={16} />
      ) : (
        <a className={styles.buttonText} href="#">
          {children}
        </a>
      )}
    </button>
  );
};

export default Button;
