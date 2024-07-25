import { MassJobCreationGlobalActionContext } from "gadget-server";

/**
 * @param { MassJobCreationGlobalActionContext } context
 */
export async function run({
  params: { errorAll, failCount, count, maxConcurrency = 1, retryCount = 0 },
  logger,
  api,
  connections,
}) {
  if (!count) throw new Error("Count must be non-zero");

  let errored = 0;

  for (let i = 0; i < count; i++) {
    await api.enqueue(
      api.job,
      { error: errorAll || errored < failCount },
      {
        maxConcurrency,
        retries: {
          retryCount,
        },
      }
    );

    if (failCount) errored++;
  }
}

export const params = {
  errorAll: {
    type: "boolean",
  },
  count: {
    type: "number",
  },
  failCount: {
    type: "number",
  },
  maxConcurrency: {
    type: "number",
  },
  retryCount: {
    type: "number",
  },
};

export const options = {
  timeoutMS: 900000,
};
