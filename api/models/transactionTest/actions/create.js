import { applyParams, save, ActionOptions, CreateTransactionTestActionContext } from "gadget-server";

/**
 * @param { CreateTransactionTestActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  applyParams(params, record);
  await save(record);
};

/**
 * @param { CreateTransactionTestActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  await api.transaction(async () => {
    const res = await Promise.all([
      api.internal.child.create({}),
      api.internal.child.create({}),
      // api.causeError.create({})
    ])

    logger.info({ res })
  })
};

/** @type { ActionOptions } */
export const options = {
  actionType: "create"
};
