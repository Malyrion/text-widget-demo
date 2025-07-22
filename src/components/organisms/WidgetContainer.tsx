import Button from "../atoms/Button";
import TextField from "../atoms/TextField";
import React, { useState } from "react";
import type { WidgetEntity } from "@/domain/widgetTypes";

type WidgetContainerProps = {
  widgets: WidgetEntity[];
  onAdd?: () => void;
  onDelete?: (id: string) => void;
  onUpdate?: (widget: Partial<WidgetEntity> & { id: string }) => void;
};

const WidgetContainer: React.FC<WidgetContainerProps> = ({
  widgets,
  onAdd,
  onDelete,
  onUpdate,
}) => {
  const [editTexts, setEditTexts] = useState<Record<string, string>>({});

  const handleTextChange = (id: string, value: string) => {
    setEditTexts((prev) => ({ ...prev, [id]: value }));
  };

  const handleSave = (id: string) => {
    if (onUpdate) {
      onUpdate({ id, text: editTexts[id] ?? "" });
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-4">
      {widgets.map((widget) => (
        <div
          key={widget.id}
          className="bg-white shadow-lg rounded-lg p-4 flex flex-col gap-2 w-full"
        >
          <TextField
            value={editTexts[widget.id] ?? widget.text}
            onChange={(value) => handleTextChange(widget.id, value)}
            title="My New Widget"
          />
          <div className="flex flex-row justify-between mt-2">
            <Button
              buttonText="Delete"
              color="red"
              onPress={() => onDelete && onDelete(widget.id)}
            />
            <Button
              buttonText="Save"
              color="green"
              onPress={() => handleSave(widget.id)}
            />
          </div>
        </div>
      ))}
      <div className="flex justify-end pt-2">
        <Button
          color="blue"
          buttonText="Add"
          onPress={onAdd ? onAdd : () => alert("Add new widget!")}
        />
      </div>
    </div>
  );
};

export default WidgetContainer;
