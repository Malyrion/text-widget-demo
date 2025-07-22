import { WidgetEntity } from "@/domain";
import { useWidgetStore } from "@/store";
import { initialWidgetStoreValues } from "@/store/initialStoreValues";
import { act } from "react";

const date: Date = new Date();
const widget: WidgetEntity[] = [{
  id: "widget-1",
  title: "TextTitle",
  text: "WidgetText",
  createdBy: "user-1",
  createdAt: date,
  updatedAt: date,
}];

describe("useWidgetStore test", () => {
  beforeEach(() => {
    act(() => {
      useWidgetStore.setState({ ...initialWidgetStoreValues });
    });
  });

  it("sets a new widget", () => {
    act(() => {
      useWidgetStore.getState().setWidgets(widget);
    });

    const state = useWidgetStore.getState();
    expect(state.widgets).toHaveLength(1);
    expect(state.widgets[0].text).toBe("WidgetText");
  });

  it("updates an existing widget", () => {
    act(() => {
      useWidgetStore.setState({ widgets: widget, selectedWidgetId: "widget-1" });
      useWidgetStore.getState().updateWidget("widget-1", { text: "Updated Widget" });
    });

    const updated = useWidgetStore.getState().widgets[0];
    expect(updated.text).toBe("Updated Widget");
  });

  it("removes a widget and resets selectedWidgetId if matched", () => {
    act(() => {
      useWidgetStore.setState({ widgets: widget, selectedWidgetId: "widget-1" });
      useWidgetStore.getState().removeWidget("widget-1");
    });

    const state = useWidgetStore.getState();
    expect(state.widgets).toHaveLength(0);
    expect(state.selectedWidgetId).toBe(null);
  });

  it("does not reset selectedWidgetId if ID does not match removed", () => {
    act(() => {
      useWidgetStore.setState({ widgets: widget, selectedWidgetId: "other-1" });
      useWidgetStore.getState().removeWidget("widget-1");
    });

    const state = useWidgetStore.getState();
    expect(state.selectedWidgetId).toBe("other-1");
  });

  it("sets setSelectedWidgetId", () => {
    act(() => {
      useWidgetStore.getState().setSelectedWidgetId("widget-99");
    });

    expect(useWidgetStore.getState().selectedWidgetId).toBe("widget-99");
  });


  it("clears all widgets and resets store", () => {
    act(() => {
      useWidgetStore.setState({
        widgets: widget,
        selectedWidgetId: "widget-1",
      });

      useWidgetStore.getState().clearWidgets();
    });

    const state = useWidgetStore.getState();
    expect(state.widgets).toEqual(initialWidgetStoreValues.widgets);
    expect(state.selectedWidgetId).toBe(initialWidgetStoreValues.selectedWidgetId);
  });
});
