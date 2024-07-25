import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "find" model, go to https://bug-playground.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "ZJE35VIzq0i2",
  fields: {
    parent: {
      type: "belongsTo",
      parent: { model: "parent" },
      storageKey: "-RRbatlodtr0",
    },
    text: {
      type: "string",
      validations: { required: true, unique: true },
      storageKey: "NEIeku7voSmI",
    },
  },
};
