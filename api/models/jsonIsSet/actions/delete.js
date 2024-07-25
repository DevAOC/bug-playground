import { deleteRecord, ActionOptions, DeleteJsonIsSetActionContext } from "gadget-server";

/**
 * @param { DeleteJsonIsSetActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  await deleteRecord(record);
};

/**
 * @param { DeleteJsonIsSetActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "delete"
};
