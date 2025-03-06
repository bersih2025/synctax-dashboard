
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useIsMobile } from '@/hooks/use-mobile';

const data = [
  {
    npwp: "12.345.678.9-012.345",
    owner: "John Doe",
    outlet: "Store A",
    orderDate: "2024-02-20",
    orderNumber: "ORD001",
    total: 2500000
  },
];

const TaxDataTable = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="space-y-4">
        {data.map((row, i) => (
          <div key={i} className="bg-card rounded-lg p-4 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="text-sm text-muted-foreground">NPWP</div>
              <div>{row.npwp}</div>
              <div className="text-sm text-muted-foreground">Pemilik</div>
              <div>{row.owner}</div>
              <div className="text-sm text-muted-foreground">Outlet</div>
              <div>{row.outlet}</div>
              <div className="text-sm text-muted-foreground">Tanggal Order</div>
              <div>{row.orderDate}</div>
              <div className="text-sm text-muted-foreground">Nomor Order</div>
              <div>{row.orderNumber}</div>
              <div className="text-sm text-muted-foreground">Total</div>
              <div>Rp {row.total.toLocaleString('id-ID')}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>NPWP</TableHead>
            <TableHead>Pemilik</TableHead>
            <TableHead>Outlet</TableHead>
            <TableHead>Tanggal Order</TableHead>
            <TableHead>Nomor Order</TableHead>
            <TableHead>Total (Rp)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i}>
              <TableCell>{row.npwp}</TableCell>
              <TableCell>{row.owner}</TableCell>
              <TableCell>{row.outlet}</TableCell>
              <TableCell>{row.orderDate}</TableCell>
              <TableCell>{row.orderNumber}</TableCell>
              <TableCell>{row.total.toLocaleString('id-ID')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TaxDataTable;
