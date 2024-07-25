import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "gelly" model, go to https://bug-playground.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "h2bx3F5w35Zx",
  fields: {
    childCount: {
      type: "computed",
      sourceFile: "api/models/gelly/childCount.gelly",
      storageKey: "FaMY5xYrIDXj",
    },
    children: {
      type: "hasMany",
      children: { model: "child", belongsToField: "gelly" },
      storageKey: "ziOeuOjKwmOE",
    },
    fetchChildren: {
      type: "computed",
      sourceFile: "api/models/gelly/fetchChildren.gelly",
      storageKey: "c9HyKJmFTk7y",
    },
    name: { type: "string", storageKey: "1WBB02_U4k4D" },
  },
};
