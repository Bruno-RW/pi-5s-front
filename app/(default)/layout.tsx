"use client";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col gap-y-10 px-2">
      {children}
    </main>
  );
};

export default DefaultLayout;