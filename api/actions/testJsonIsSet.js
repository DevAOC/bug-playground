import { TestJsonIsSetGlobalActionContext } from "gadget-server";

/**
 * @param { TestJsonIsSetGlobalActionContext } context
 */
export async function run({ params, logger, api, connections }) {
  return await api.jsonIsSet.findMany({
    filter: {
      json: {
        // isSet: false
        // notEquals: null
        // equals: null
        notEquals: {}
      }
    }
  })
};
