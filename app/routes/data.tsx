import { ActionFunctionArgs, json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";

interface LoaderData {
  message: string;
  first_name: string;
  last_name: string;
}

export const loader = () => {
  return json({ message: "Hello world!" });
};

export const action = async({ request }: ActionFunctionArgs) => {
  const body = await request.formData();
  console.log('body',body);
  return Object.fromEntries(body.entries());
}

export default function Data() {
  const actionData = useLoaderData<LoaderData>();
  return (
    <div>
      <Form method="POST">
        <input name="first_name" />
        <input name="last_name" />
        <button>submit</button>
      </Form>
      <div>
        Name:{" "}
        {actionData ? `${actionData.first_name} ${actionData.last_name}` : null}
      </div>
    </div>
  );
}
