import { deleteRecord, ActionOptions, DeleteMissingLogsActionContext } from "gadget-server";

/**
 * @param { DeleteMissingLogsActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  await deleteRecord(record);
};

/**
 * @param { DeleteMissingLogsActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "delete"
};
