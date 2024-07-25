import type { GadgetPermissions } from "gadget-server";

/**
 * This metadata describes the access control configuration available in your application.
 * Grants that are not defined here are set to false by default.
 *
 * View and edit your roles and permissions in the Gadget editor at https://bug-playground.gadget.app/edit/settings/permissions
 */
export const permissions: GadgetPermissions = {
  type: "gadget/permissions/v1",
  roles: {
    unauthenticated: {
      storageKey: "unauthenticated",
      models: {
        example: {
          read: true,
        },
        group: {
          read: {
            filter: "accessControl/filters/group/tenancy.gelly",
          },
        },
        member: {
          read: true,
        },
        useActionTest: {
          actions: {
            create: true,
          },
        },
      },
    },
    Testing: {
      storageKey: "UD1JtYTBWlpb",
      models: {
        example: {
          read: true,
        },
        member: {
          read: true,
        },
        parent: {
          read: true,
          actions: {
            create: true,
          },
        },
        shop: {
          read: {
            filter: "accessControl/filters/shop/tenancy.gelly",
          },
        },
      },
    },
  },
};
