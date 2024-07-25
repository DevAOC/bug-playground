import { applyParams, save, ActionOptions, UpdateSomeModelWithSsActionContext } from "gadget-server";

/**
 * @param { UpdateSomeModelWithSsActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  applyParams(params, record);
  await save(record);
};

/**
 * @param { UpdateSomeModelWithSsActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "update"
};
