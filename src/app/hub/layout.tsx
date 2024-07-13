import { HubMenu } from "@/containers/hub_menu/hub_menu";
import { HubNavbar } from "@/containers/hub_navbar/hub_navbar";

export default function HubLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="Hub_Layout">
      <HubMenu/>
      <HubNavbar/>
      <div className="children_content">{children}</div>
    </main>
  );
}
