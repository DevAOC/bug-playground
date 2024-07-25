import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "child" model, go to https://bug-playground.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "ytemSl1CDskO",
  fields: {
    gelly: {
      type: "belongsTo",
      parent: { model: "gelly" },
      storageKey: "1jl-HomIA3TQ",
    },
    parent: {
      type: "belongsTo",
      parent: { model: "parent" },
      storageKey: "ymYan9m1rwhi",
    },
    test: { type: "string", storageKey: "DLFSETio4gJC" },
  },
};
