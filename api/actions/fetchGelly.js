import { FetchGellyGlobalActionContext } from "gadget-server";

/**
 * @param { FetchGellyGlobalActionContext } context
 */
export async function run({ params, logger, api, connections }) {
  return await api.gelly.findOne("1")
};
