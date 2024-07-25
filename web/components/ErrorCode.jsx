import { useFetch } from "@gadgetinc/react";

export default () => {
  const [{ data, error, fetching }] = useFetch(
    "https://bug-playground--development.gadget.app/example"
  );

  console.log("DATA", data);

  console.log("ERROR RESPONSE", error?.response);

  return <></>;
};
