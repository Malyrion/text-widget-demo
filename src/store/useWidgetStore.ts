import { WidgetEntity } from "@/domain";
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { initialWidgetStoreValues } from "./initialStoreValues";

type WidgetStore = {
  widgets: WidgetEntity[];
  selectedWidgetId: string | null;

  setWidgets: (widgets: WidgetEntity[]) => void;
  addWidget: (widget: WidgetEntity) => void;
  updateWidget: (id: string, updateData: Partial<WidgetEntity>) => void;
  removeWidget: (id: string) => void;
  setSelectedWidgetId: (id: string) => void;
  clearWidgets: () => void;
};

export const useWidgetStore = create<WidgetStore>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialWidgetStoreValues,
        setWidgets: (widgets) => set({ widgets }),
        addWidget: (widget) => set({ widgets: [...get().widgets, widget] }),
        updateWidget: (id, updateData) =>
          set((state) => ({
            widgets: state.widgets.map((widget) =>
              widget.id === id ? { ...widget, ...updateData } : widget
            ),
          })),
        removeWidget: (id) =>
          set((state) => ({
            widgets: state.widgets.filter((widget) => widget.id !== id),
            selectedWidgetId:
              state.selectedWidgetId === id ? null : state.selectedWidgetId,
          })),
        setSelectedWidgetId: (id) => set({ selectedWidgetId: id }),
        clearWidgets: () => set({ ...initialWidgetStoreValues }),
      }),
      {
        name: "widgetsInformation",
      }
    )
  )
);
