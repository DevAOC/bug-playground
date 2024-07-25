import { ActionOptions, TestGlobalActionContext } from "gadget-server";

/**
 * @param { TestGlobalActionContext } context
 */
export async function run({ params, logger, api, connections }) {
  const res = await api.find.findByText("Testing")

  return res;
};

/** @type { ActionOptions } */
export const options = {};
