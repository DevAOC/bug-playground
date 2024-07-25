import { ActionOptions, ConfirmationurlGlobalActionContext } from "gadget-server";

/**
 * @param { ConfirmationurlGlobalActionContext } context
 */
export async function run({ params, logger, api, connections }) {
  const confirmationUrl = "https://bug-playground--development.gadget.app/"

  logger.info({ confirmationUrl })

  await api.missingLogs.create({ confirmationUrl })
};

/** @type { ActionOptions } */
export const options = {};
