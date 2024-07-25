import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "student" model, go to https://bug-playground.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "aLkBRNQO-Ppn",
  fields: {
    name: { type: "string", storageKey: "FwclxRe1cAbF" },
    registrations: {
      type: "hasManyThrough",
      sibling: { model: "class", relatedField: "registrations" },
      join: {
        model: "registration",
        belongsToSelfField: "student",
        belongsToSiblingField: "class",
      },
      storageKey: "S5-r0zYdzar5",
    },
  },
};
