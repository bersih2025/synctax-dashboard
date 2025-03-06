
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
    outlet: "Store A",
    npwp: "12.345.678.9-012.345",
    address: "Jl. Example No. 123",
    total: 2500000
  },
  // Add more dummy data here
];

const UnpaidTaxTable = () => {
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Outlet</TableHead>
            <TableHead>NPWP</TableHead>
            <TableHead>Alamat</TableHead>
            <TableHead>Total Pajak (Rp)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i}>
              <TableCell>{row.outlet}</TableCell>
              <TableCell>{row.npwp}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.total.toLocaleString('id-ID')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UnpaidTaxTable;
