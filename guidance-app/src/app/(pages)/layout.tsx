import BackgroundPattern from "@/components/UI/BackgroundPattern";
import Header from "@/components/Header";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col gap-y-10 max-w-5xl mx-auto px-4 min-h-screen">
        <Header />
        <BackgroundPattern />
        {children}
      </div>
    </>
  );
}
