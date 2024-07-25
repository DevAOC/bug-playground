import { deleteRecord, ActionOptions, DeleteP3ExampleActionContext } from "gadget-server";

/**
 * @param { DeleteP3ExampleActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  await deleteRecord(record);
};

/**
 * @param { DeleteP3ExampleActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "delete"
};
