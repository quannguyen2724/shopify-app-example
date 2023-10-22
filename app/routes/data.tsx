import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";

interface LoaderData {
  message: string;
  first_name: string;
  last_name: string;
}

export const loader = () => {
  return json<LoaderData>({
    message: "lolololo",
    first_name: "",
    last_name: "",
  });
};

export const action = async ({
  request,
}: {
  request: Request;
  response: Response;
}) => {
  const formData = await request.formData();
  const body: { [key: string]: string | File } = {};
  for (const [name, value] of formData.entries()) {
    if (value instanceof File) {
      body[name] = value;
    } else {
      body[name] = value as string;
    }
  }
  console.log(body.first_name);
  console.log(body.last_name);
  return body;
};

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