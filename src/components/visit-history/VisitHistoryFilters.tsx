
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const VisitHistoryFilters = () => {
  return (
    <div className="space-y-4 mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="space-y-2">
          <Label>Rentang Tanggal</Label>
          <div className="flex flex-col sm:flex-row gap-2">
            <Input type="date" placeholder="Dari tanggal" className="w-full" />
            <Input type="date" placeholder="Sampai tanggal" className="w-full" />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Nama Pemilik</Label>
          <Input type="text" placeholder="Cari nama pemilik..." className="w-full" />
        </div>
        <div className="space-y-2">
          <Label>Nama Outlet</Label>
          <Input type="text" placeholder="Cari nama outlet..." className="w-full" />
        </div>
        <div className="space-y-2">
          <Label>NPWP</Label>
          <Input type="text" placeholder="Cari NPWP..." className="w-full" />
        </div>
        <div className="space-y-2">
          <Label>Status</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="visited">Visited</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default VisitHistoryFilters;
