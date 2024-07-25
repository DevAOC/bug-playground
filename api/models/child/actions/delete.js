import { deleteRecord, ActionOptions, DeleteParent1ActionContext } from "gadget-server";

/**
 * @param { DeleteParent1ActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  await deleteRecord(record);
};

/**
 * @param { DeleteParent1ActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "delete"
};
