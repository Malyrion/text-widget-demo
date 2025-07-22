import { useMutation } from "@tanstack/react-query";
import { useWidgetStore } from "../store";
import axiosInstance from "../utils/axiosInstance";
import type { WidgetEntity } from "../domain";

const updateWidget = async (
  widget: Partial<WidgetEntity> & { id: string }
): Promise<WidgetEntity> => {
  const response = await axiosInstance.patch<WidgetEntity>(
    `/widgets/${widget.id}`,
    widget
  );
  return response.data;
};

export const useUpdateWidgetMutationAPI = () => {
  const updateWidgetInStore = useWidgetStore((state) => state.updateWidget);

  return useMutation<
    WidgetEntity,
    Error,
    Partial<WidgetEntity> & { id: string }
  >({
    mutationFn: updateWidget,
    onSuccess: (updatedWidget) => {
      updateWidgetInStore(updatedWidget.id, updatedWidget);
    },
    onError: () => {
      console.log("Error updating widget");
    },
  });
};
