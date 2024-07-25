import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "modelA" model, go to https://bug-playground.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "HpUF82kcOh1q",
  fields: {
    modelBs: {
      type: "hasMany",
      children: { model: "modelB", belongsToField: "modelA" },
      storageKey: "basNnZQmEDsB",
    },
  },
};