import { Button } from "@chakra-ui/button";
import { chakra } from "@chakra-ui/system";
import React from "react";

interface ButtonProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export const _AppButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  className,
}) => {
  return (
    <Button
      className={className}
      type="submit"
      bg="green.400"
      color="white"
      _active={{ bg: "green.300" }}
      _hover={{ backgroundColor: "green.500", boxShadow: "lg" }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export const AppButton = chakra(_AppButton);
