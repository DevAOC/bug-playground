import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "shop" model, go to https://bug-playground.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "qeR4109U4jXP",
  fields: {
    users: {
      type: "hasManyThrough",
      sibling: { model: "user", relatedField: "shops" },
      join: {
        model: "userToShop",
        belongsToSelfField: "shop",
        belongsToSiblingField: "user",
      },
      storageKey: "PLAC5GTaR3ww",
    },
  },
};
