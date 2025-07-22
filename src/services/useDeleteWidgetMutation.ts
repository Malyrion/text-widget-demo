import { useMutation } from "@tanstack/react-query";
import { useWidgetStore } from "../store";
import axiosInstance from "../utils/axiosInstance";

const deleteWidget = async (id: string): Promise<void> => {
  await axiosInstance.delete(`/widgets/${id}`);
};

export const useDeleteWidgetMutationAPI = () => {
  const removeWidgetFromStore = useWidgetStore((state) => state.removeWidget);

  return useMutation<void, Error, string>({
    mutationFn: deleteWidget,
    onSuccess: (_data, id) => {
      removeWidgetFromStore(id);
    },
    onError: () => {
        console.log("Error deleting widget");
    },
  });
};
