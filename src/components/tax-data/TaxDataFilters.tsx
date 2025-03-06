
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const TaxDataFilters = () => {
  return (
    <div className="space-y-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2">
          <Label>Rentang Tanggal</Label>
          <Input type="date" />
        </div>
        <div className="space-y-2">
          <Label>Nama Pemilik</Label>
          <Input type="text" placeholder="Cari nama pemilik..." />
        </div>
        <div className="space-y-2">
          <Label>Nama Outlet</Label>
          <Input type="text" placeholder="Cari nama outlet..." />
        </div>
        <div className="space-y-2">
          <Label>NPWP</Label>
          <Input type="text" placeholder="Cari NPWP..." />
        </div>
      </div>
    </div>
  );
};

export default TaxDataFilters;
