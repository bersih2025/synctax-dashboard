
import { Card } from "@/components/ui/card";
import TaxDataTable from "@/components/dashboard/TaxDataTable";
import TaxDataFilters from "@/components/tax-data/TaxDataFilters";

const TaxData = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-6">Data Pajak</h1>
        <TaxDataFilters />
        <TaxDataTable />
      </Card>
    </div>
  );
};

export default TaxData;
