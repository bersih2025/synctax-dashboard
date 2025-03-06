
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    npwp: "12.345.678.9-012.345",
    owner: "John Doe",
    outlet: "Store A",
    orderDate: "2024-02-20",
    orderNumber: "ORD001",
    total: 2500000
  },
  // Add more dummy data here
];

const TaxDataTable = () => {
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
