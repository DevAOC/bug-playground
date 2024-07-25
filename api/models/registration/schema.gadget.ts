import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "registration" model, go to https://bug-playground.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "46e8mDW6fzEQ",
  fields: {
    class: {
      type: "belongsTo",
      parent: { model: "class" },
      storageKey: "sQ6Kir8dhc0e",
    },
    student: {
      type: "belongsTo",
      parent: { model: "student" },
      storageKey: "nDs-7_lcZeEY",
    },
  },
};
