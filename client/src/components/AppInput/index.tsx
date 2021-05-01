import React from "react";
import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

interface InputProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  type?: string;
  name?: string;
  placeholder?: string;
  tooltipLabel?: string;
  isTooltipOpen?: boolean;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
}

export const AppInput: React.FC<InputProps> = ({
  left,
  right,
  type = "text",
  placeholder,
  required,
  name,
  onChange,
  onFocus,
}) => {
  return (
    <FormControl>
      <InputGroup>
        {left ? <InputLeftElement color="gray.300" children={left} /> : null}
        <Input
          focusBorderColor="green.400"
          placeholder={placeholder}
          required={required || false}
          bg="gray.50"
          autoComplete="off"
          name={name}
          onFocus={onFocus}
          onChange={onChange}
          type={type}
        />
        {right ? <InputRightElement color="gray.300" children={right} /> : null}
      </InputGroup>
    </FormControl>
  );
};
