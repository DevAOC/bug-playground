import { JobGlobalActionContext } from "gadget-server";

/**
 * @param { JobGlobalActionContext } context
 */
export async function run({ params: { error }, logger, api, connections }) {
  if (error) throw new Error("Job set to fail");

  await api.child.create({ test: "Created with background actions" });
}

export const params = {
  error: {
    type: "boolean",
  },
};
