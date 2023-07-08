import React, { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { InputState } from "../../types/Input";

interface InputProps {
  children: JSX.Element | string;
  type: HTMLInputTypeAttribute;
  placehoder?: string;
  state?: React.Dispatch<React.SetStateAction<InputState>>;
  regexp?: RegExp;
  value?: string;
  placeholder?: string;
  labelStyles?: string;
  inputStyles?: string;
}

const Input: React.FC<InputProps> = ({
  children,
  type,
  regexp,
  placehoder,
  state,
  value,
  placeholder,
  labelStyles,
  inputStyles,
  ...args
}) => {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { target } = event;

    if (target instanceof HTMLInputElement) {
      if (regexp && state) {
        const valid = regexp.exec(target.value);
        state({
          valid: !!valid,
          value: target.value,
        });
      }
    }
  }

  return (
    <>
      <label className={`block ${labelStyles ?? ""}`}>
        <div className="block mb-2 text-support-100 font-medium tracking-[1%]">
          {children}
        </div>
        <input
          className={`block mb-2 bg-support-900 p-5 w-full text-support-200 outline-none ${
            inputStyles ?? ""
          }`}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          {...args}
        />
      </label>
      <p>{placehoder}</p>
    </>
  );
};

export default Input;
