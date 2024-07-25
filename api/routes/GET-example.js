import { RouteContext } from "gadget-server";

/**
 * Route handler for GET example
 *
 * @param { RouteContext } route context - see: https://docs.gadget.dev/guides/http-routes/route-configuration#route-context
 *
 */
export default async function route({
  request,
  reply,
  api,
  logger,
  connections,
}) {
  reply.code(202).send({ hello: "world" });
  // await reply.code(200).send();
}
