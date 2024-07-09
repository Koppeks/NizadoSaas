
export default function HubLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="Hub_Layout">
      <div>{children}</div>
    </main>
  );
}
