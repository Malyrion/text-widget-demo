import Button from "../atoms/Button";
import TextField from "../atoms/TextField";

export type Widget = {
  id: string;
  text: string;
};

type WidgetContainerProps = {
  widgets: Widget[];
  onAdd?: () => void;
};

const WidgetContainer: React.FC<WidgetContainerProps> = ({
  widgets,
  onAdd,
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-4">
      {widgets.map((widget) => (
        <div
          key={widget.id}
          className="bg-white shadow-lg rounded-lg p-4 flex flex-col gap-2 w-full"
        >
          <TextField
            value={widget.text}
            onChange={() => {}}
            label="My New Widget"
          />
          <div className="flex flex-row justify-between mt-2">
            <Button
              buttonText="Delete"
              color="red"
              onPress={() => alert(`Delete ${widget.id}`)}
            />
            <Button
              buttonText="Save"
              color="green"
              onPress={() => alert(`Save ${widget.id}`)}
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
