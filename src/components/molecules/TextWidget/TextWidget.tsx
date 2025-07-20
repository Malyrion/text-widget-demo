import Button from "@/components/atoms/Button";
import TextField from "@/components/atoms/TextField";
import React from "react";

type TextWidgetProps = {
  title: string;
  onDelete: () => void;
  isLoading: boolean;
};

const TextWidget: React.FC<TextWidgetProps> = ({
  title,
  onDelete,
  isLoading,
}) => {
  const handleDelete = () => {
    console.log("Delete Widget Call");
  };

  return (
    <div>
      <h1>{title}</h1>
      <div>
        <Button buttonText="Delete" onPress={handleDelete} />
      </div>
    </div>
  );
};

export default TextWidget;
