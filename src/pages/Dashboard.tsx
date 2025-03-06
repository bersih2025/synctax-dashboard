
import { Card } from "@/components/ui/card";
import { Users, Receipt, Clock, Store } from "lucide-react";
import DashboardCard from "@/components/dashboard/DashboardCard";
import TaxDistributionMap from "@/components/dashboard/TaxDistributionMap";
import PaidUnpaidChart from "@/components/dashboard/PaidUnpaidChart";
import TopOutletsChart from "@/components/dashboard/TopOutletsChart";
import OutletHistoryTable from "@/components/dashboard/OutletHistoryTable";
import UnpaidTaxTable from "@/components/dashboard/UnpaidTaxTable";
import OutletVisitedTable from "@/components/dashboard/OutletVisitedTable";
import TaxDataTable from "@/components/dashboard/TaxDataTable";
import VisitHistoryTable from "@/components/dashboard/VisitHistoryTable";

const summaryCards = [
  {
    title: "Total Owner",
    value: "150",
    icon: Users,
    trend: "+5%",
  },
  {
    title: "Pendapatan Pajak",
    value: "Rp 2.5M",
    icon: Receipt,
    trend: "+12%",
  },
  {
    title: "Pajak Tertunda",
    value: "Rp 450K",
    icon: Clock,
    trend: "-3%",
  },
  {
    title: "Total Outlet",
    value: "324",
    icon: Store,
    trend: "+8%",
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryCards.map((card) => (
          <DashboardCard key={card.title} {...card} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Tax Distribution by Area</h2>
          <TaxDistributionMap />
        </Card>
        
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Paid vs Unpaid Outlet</h2>
          <PaidUnpaidChart />
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">TOP 10 Outlet by Tax Amount</h2>
        <TopOutletsChart />
      </Card>

      <div className="grid grid-cols-1 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Outlet History Tax Payment</h2>
          <OutletHistoryTable />
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Outlet List Unpaid Tax Previous Month</h2>
          <UnpaidTaxTable />
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Outlet Visited</h2>
          <OutletVisitedTable />
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Tax Data</h2>
          <TaxDataTable />
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Outlet Visited History</h2>
          <VisitHistoryTable />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
