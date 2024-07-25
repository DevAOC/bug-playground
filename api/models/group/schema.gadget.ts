import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "group" model, go to https://bug-playground.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "9kT53Ttav0we",
  fields: {
    members: {
      type: "hasMany",
      children: { model: "member", belongsToField: "group" },
      storageKey: "owueh7DhLwY_",
    },
    name: { type: "string", storageKey: "3jyWxqPGFPz_" },
  },
};
