import React from "react";

type ButtonProps = {
  buttonText: string;
  onPress: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
  color?: string;
};

const Button: React.FC<ButtonProps> = ({
  buttonText,
  onPress,
  isLoading = false,
  isDisabled = false,
  color = "blue",
}) => {
  const baseClass =
    "px-4 py-2 rounded-md font-medium transition duration-150 ease-in-out disabled:cursor-not-allowed disabled:opacity-50";

  let colorClass = "";

  switch (color) {
    case "red":
      colorClass = "bg-red-600 hover:bg-red-700 text-white";
      break;
    case "green":
      colorClass = "bg-green-600 hover:bg-green-700 text-white";
      break;
    default:
      colorClass = "bg-blue-600 hover:bg-blue-700 text-white";
      break;
  }

  return (
    <button
      onClick={onPress}
      disabled={isDisabled}
      className={`${baseClass} ${colorClass}`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
