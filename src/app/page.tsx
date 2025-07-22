"use client";
import WidgetContainer from "@/components/organisms/WidgetContainer";
import { useWidgetStore } from "@/store/useWidgetStore";
import { useAddWidgetMutationAPI } from "@/services/useAddWidgetMutaion";
import { useDeleteWidgetMutationAPI } from "@/services/useDeleteWidgetMutation";
import { useUpdateWidgetMutationAPI } from "@/services/useUpdateWidgetMutation";
import type { WidgetEntity } from "@/domain/widgetTypes";
import { useEffect } from "react";
import axiosInstance from "@/utils/axiosInstance";

export default function Home() {
  const widgets = useWidgetStore((state) => state.widgets);
  const setWidgets = useWidgetStore((state) => state.setWidgets);

  useEffect(() => {
    const fetchWidgets = async () => {
      const response = await axiosInstance.get<WidgetEntity[]>("/widgets");
      setWidgets(response.data);
    };
    fetchWidgets();
  }, [setWidgets]);

  const addWidgetMutation = useAddWidgetMutationAPI();
  const deleteWidgetMutation = useDeleteWidgetMutationAPI();
  const updateWidgetMutation = useUpdateWidgetMutationAPI();

  const handleAdd = () => {
    addWidgetMutation.mutate({ title: "", text: "" });
  };

  const handleDelete = (id: string) => {
    deleteWidgetMutation.mutate(id);
  };

  const handleUpdate = (widget: Partial<WidgetEntity> & { id: string }) => {
    updateWidgetMutation.mutate(widget);
  };

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Text widget demo !</h1>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-[80vw] max-w-5xl">
        <section className="w-full">
          <WidgetContainer
            widgets={widgets}
            onAdd={handleAdd}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        </section>
      </main>
    </div>
  );
}
