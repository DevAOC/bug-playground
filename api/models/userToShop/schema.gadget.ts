import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "userToShop" model, go to https://bug-playground.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "onBHAkfBE6sR",
  fields: {
    shop: {
      type: "belongsTo",
      parent: { model: "shop" },
      storageKey: "Vhul-VIOdqGh",
    },
    user: {
      type: "belongsTo",
      parent: { model: "user" },
      storageKey: "KxX7ZyDv8D_V",
    },
  },
};
