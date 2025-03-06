
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LayoutDashboard, FileText, History, FileBarChart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    title: "Dasbor",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Data Pajak",
    path: "/data-pajak",
    icon: FileText,
  },
  {
    title: "Riwayat Kunjungan",
    path: "/riwayat-kunjungan",
    icon: History,
  },
  {
    title: "Laporan",
    path: "/laporan",
    icon: FileBarChart,
  },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <SidebarComponent className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <SidebarContent>
        <div className="p-4">
          <h1 className="text-xl font-bold">Synchro Tax Insight</h1>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    asChild
                    className={location.pathname === item.path ? "bg-primary/10" : ""}
                  >
                    <Link to={item.path} className="flex items-center gap-3 w-full">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </SidebarComponent>
  );
};

export default Sidebar;
