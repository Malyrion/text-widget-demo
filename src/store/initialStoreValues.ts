import { UserEntity, WidgetEntity } from "@/domain";

export const initialUserStoreValues: UserEntity = {
  id: "99388ab9-a639-46d0-b2b5-e3a6b185b71b",
  name: "Bob",
  email: "bob@example.com",
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const widgetStoreValues: WidgetEntity = {
  id: "",
  title: "",
  text: "",
  createdAt: "" as unknown as Date,
  updatedAt: "" as unknown as Date,
  createdBy: "",
};

export const initialWidgetStoreValues = {
  widgets: [] as WidgetEntity[],
  selectedWidgetId: null as string | null,
};
