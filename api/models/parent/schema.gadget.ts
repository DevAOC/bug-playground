import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "parent" model, go to https://bug-playground.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "gKhK8o8tt_NK",
  fields: {
    anotherExample: { type: "string", storageKey: "xCwcUNzU5Kum" },
    child1: {
      type: "belongsTo",
      parent: { model: "child" },
      storageKey: "moMxqTSppHoW",
    },
    child2: {
      type: "belongsTo",
      parent: { model: "child" },
      storageKey: "DmaMXTxd5YKZ",
    },
    child3: {
      type: "belongsTo",
      parent: { model: "child" },
      storageKey: "bIkQ2VnAuJvY",
    },
    children: {
      type: "hasMany",
      children: { model: "child", belongsToField: "parent" },
      storageKey: "lUDxNNSxCWDL",
    },
    example: { type: "string", storageKey: "57qpP5r1Zwnu" },
    finds: {
      type: "hasMany",
      children: { model: "find", belongsToField: "parent" },
      storageKey: "r4sN8KmjIKpJ",
    },
    text: { type: "string", storageKey: "8mMDEEil5n-H" },
    textField: { type: "string", storageKey: "kKWvLFHUN6VK" },
    useActionTests: {
      type: "hasMany",
      children: { model: "useActionTest", belongsToField: "parent" },
      storageKey: "xUBBh_CfDaFS",
    },
  },
};
