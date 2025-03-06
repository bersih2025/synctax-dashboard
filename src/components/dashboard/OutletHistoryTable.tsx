
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
    month1: 2500000,
    month2: 2300000,
    month3: 2700000,
    month4: 2400000,
    month5: 2600000,
    month6: 2800000,
  },
  // Add more dummy data here
];

const OutletHistoryTable = () => {
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Outlet</TableHead>
            <TableHead>1 Bulan Lalu</TableHead>
            <TableHead>2 Bulan Lalu</TableHead>
            <TableHead>3 Bulan Lalu</TableHead>
            <TableHead>4 Bulan Lalu</TableHead>
            <TableHead>5 Bulan Lalu</TableHead>
            <TableHead>6 Bulan Lalu</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i}>
              <TableCell>{row.outlet}</TableCell>
              <TableCell>{row.month1.toLocaleString('id-ID')}</TableCell>
              <TableCell>{row.month2.toLocaleString('id-ID')}</TableCell>
              <TableCell>{row.month3.toLocaleString('id-ID')}</TableCell>
              <TableCell>{row.month4.toLocaleString('id-ID')}</TableCell>
              <TableCell>{row.month5.toLocaleString('id-ID')}</TableCell>
              <TableCell>{row.month6.toLocaleString('id-ID')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OutletHistoryTable;
