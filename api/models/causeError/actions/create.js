import { applyParams, save, ActionOptions, CreateCauseErrorActionContext } from "gadget-server";

/**
 * @param { CreateCauseErrorActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  throw new Error("Invoked")
  
  applyParams(params, record);
  await save(record);
};

/**
 * @param { CreateCauseErrorActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  // Your logic goes here
};

/** @type { ActionOptions } */
export const options = {
  actionType: "create"
};
