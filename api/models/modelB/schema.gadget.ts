import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "modelB" model, go to https://bug-playground.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "YSBD1b3fUgY5",
  fields: {
    modelA: {
      type: "belongsTo",
      parent: { model: "modelA" },
      storageKey: "WqiIWlJDM9Ck",
    },
  },
};
