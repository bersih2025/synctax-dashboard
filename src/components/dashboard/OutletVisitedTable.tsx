
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
    owner: "John Doe",
    outlet: "Store A",
    npwp: "12.345.678.9-012.345",
    address: "Jl. Example No. 123",
    status: "Visited",
    notes: "All requirements met"
  },
  // Add more dummy data here
];

const OutletVisitedTable = () => {
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Pemilik</TableHead>
            <TableHead>Outlet</TableHead>
            <TableHead>NPWP</TableHead>
            <TableHead>Alamat</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Catatan</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i}>
              <TableCell>{row.owner}</TableCell>
              <TableCell>{row.outlet}</TableCell>
              <TableCell>{row.npwp}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OutletVisitedTable;
