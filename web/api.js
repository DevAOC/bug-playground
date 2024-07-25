import { Client } from "@gadget-client/bug-testing-playground";

export const api = new Client({ environment: window.gadgetConfig.environment });
