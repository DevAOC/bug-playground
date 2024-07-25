import { TestModelWithBlahGlobalActionContext } from "gadget-server";

/**
 * @param { TestModelWithBlahGlobalActionContext } context
 */
export async function run({ params, logger, api, connections }) {

  const arr = []

  for (let i = 0; i < 2000; i++) {
    arr.push({})
  }

  return await api.some_MODEL_WithSs_America.bulkCreate(arr)
};
