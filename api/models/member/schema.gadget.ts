import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "member" model, go to https://bug-playground.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "xVvUg9TbZlgl",
  fields: {
    example: { type: "string", storageKey: "RaieUoh98016" },
    group: {
      type: "belongsTo",
      parent: { model: "group" },
      storageKey: "gNOprkRmS-Hj",
    },
  },
};
