
import { Card } from "@/components/ui/card";
import VisitHistoryTable from "@/components/dashboard/VisitHistoryTable";
import VisitHistoryFilters from "@/components/visit-history/VisitHistoryFilters";

const VisitHistory = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-6">Riwayat Kunjungan</h1>
        <VisitHistoryFilters />
        <VisitHistoryTable />
      </Card>
    </div>
  );
};

export default VisitHistory;
