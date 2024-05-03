import { Outlet } from "react-router-dom";

const HomePageLayout = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 flex flex-col">
        <main className={`overflow-y-auto py-8 sm:py-0`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default HomePageLayout;
