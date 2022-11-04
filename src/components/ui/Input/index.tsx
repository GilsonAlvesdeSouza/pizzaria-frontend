import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import React from "react";
import styles from "./style.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLElement> {}
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Input = ({ ...rest }: InputProps) => {
  return <input className={styles.input} {...rest} />;
};

const Text = ({ ...rest }: TextAreaProps) => {
  return <textarea className={styles.input} {...rest}></textarea>;
};
export { Input, Text };
