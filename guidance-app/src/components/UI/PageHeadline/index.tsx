type PageHeadlineProps = {
  children: React.ReactNode;
};

export default function PageHeadline({ children }: PageHeadlineProps) {
  return (
    <h1 className="text-3xl font-bold text-white text-center">{children}</h1>
  );
}
