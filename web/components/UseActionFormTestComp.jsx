import { useActionForm, Controller } from "@gadgetinc/react";
import { api } from "../api";

const Comp = ({ value, onChange }) => {

  return (
    <>
      <label>Here</label>
      <input value={value} onChange={onChange} />
    </>
  );
};

/**
 * Testing the issue with create wrapping the _link
 * https://discord.com/channels/836317518595096598/1227204347973079192
 */
export default () => {
  const { control, submit } = useActionForm(api.useActionTest.create);

  return (
    <>
      <Controller
        control={control}
        name="useActionTest.parent.id"
        render={({ field }) => (
          // pass the field props to the inner component (like `value` and `onChange`)
          <Comp {...field} />
        )}
      />
      <button onClick={submit}>Submit</button>
    </>
  );
};
