import { deleteRecord, ActionOptions, DeleteUserToShopActionContext } from "gadget-server";

/**
 * @param { DeleteUserToShopActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  await deleteRecord(record);
};

/**
 * @param { DeleteUserToShopActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "delete"
};
