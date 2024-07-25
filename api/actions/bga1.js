import { Bga1GlobalActionContext } from "gadget-server";

const modelBulkCreateHelper = async ({ model }) => {
  const queue = { name: "dedicated-queue", maxConcurrency: 1 }
  const arr = []

  for (let i = 0; i < 2000; i++) {
    arr.push({ name: "foobar" })
  }

  await api.enqueue(api.bga2, { arr, model, queue }, { queue: { ...queue } })
}

/**
 * @param { Bga1GlobalActionContext } context
 */
export async function run({ params, logger, api, connections }) {
  Promise.all([modelBulkCreateHelper({model: "p3Example"})]) // Extra params
};
