import { Outlet } from "@remix-run/react";

export default function Foo() {
  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        backgroundColor: "red",
      }}
    >
      <Outlet />
    </div>
  );
}
