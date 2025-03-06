
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
    address: "Jl. Example No. 123",
    status: "Visited"
  },
  // Add more dummy data here
];

const VisitHistoryTable = () => {
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>NPWP</TableHead>
            <TableHead>Pemilik</TableHead>
            <TableHead>Outlet</TableHead>
            <TableHead>Alamat</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i}>
              <TableCell>{row.npwp}</TableCell>
              <TableCell>{row.owner}</TableCell>
              <TableCell>{row.outlet}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default VisitHistoryTable;
