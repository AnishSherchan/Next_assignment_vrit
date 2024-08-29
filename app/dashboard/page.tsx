"use client";
import { withAuth } from "../utils/hoc/withAuth";
const DashboardPage = () => {
  console.log(withAuth);

  return (
    <div className="max-w-[1240px] mx-auto flex flex-col gap-10">
      <h1 className=" text-center text-[35px] font-light">
        Protected Dashboard Page
      </h1>
      <h3 className=" text-center text-[25px]">Page protected using HOC</h3>
      <p className="text-center">
        {" "}
        You need to be authenticated to get in this page.
      </p>
    </div>
  );
};

export default withAuth(DashboardPage);
