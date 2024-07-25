import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "user" model, go to https://bug-playground.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "G7NfY5vPWhZK",
  fields: {
    shops: {
      type: "hasManyThrough",
      sibling: { model: "shop", relatedField: "users" },
      join: {
        model: "userToShop",
        belongsToSelfField: "user",
        belongsToSiblingField: "shop",
      },
      storageKey: "Da1JN7_r_26q",
    },
  },
};
