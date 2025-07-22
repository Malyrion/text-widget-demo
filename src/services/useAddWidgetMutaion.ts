import { useMutation } from "@tanstack/react-query";
import type { IAddWidgetPayload, WidgetEntity } from "../domain";
import { useUserStore, useWidgetStore } from "../store";
import axiosInstance from "../utils/axiosInstance";

const addWidget = async (payload: IAddWidgetPayload): Promise<WidgetEntity> => {
  const response = await axiosInstance.post<WidgetEntity>(
    "/widgets",
    payload
  );
  return response.data;
};

export const useAddWidgetMutationAPI = () => {
  const addWidgetToStore = useWidgetStore((state) => state.addWidget);
  const userId = useUserStore((state) => state.id);

  return useMutation<WidgetEntity, Error, Omit<IAddWidgetPayload, "createdBy">>(
    {
      mutationFn: async (payload: Omit<IAddWidgetPayload, "createdBy">) => {
        const response = await addWidget({ ...payload, createdBy: userId });
        return response;
      },
      onSuccess: (newWidget: WidgetEntity) => {
        addWidgetToStore(newWidget);
      },
      onError: () => {
        console.log("Error adding widget");
      },
    }
  );
};
