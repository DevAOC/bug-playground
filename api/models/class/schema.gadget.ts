import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "class" model, go to https://bug-playground.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "Tnkdq_yKff4m",
  fields: {
    name: { type: "string", storageKey: "2vCJxOVfy4wU" },
    registrations: {
      type: "hasManyThrough",
      sibling: { model: "student", relatedField: "registrations" },
      join: {
        model: "registration",
        belongsToSelfField: "class",
        belongsToSiblingField: "student",
      },
      storageKey: "4WUQjMonEES_",
    },
  },
};
