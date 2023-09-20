import DashBoardWrapper from "../../components/DashBoardWrapper";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper } from "@mui/material";

const columns = [
  { field: 'id', headerName: 'Product ID', width: 120 },
  { field: 'productName', headerName: 'Product Name', width: 200 },
  { field: 'amount', headerName: 'Amount', type: 'number', width: 120 },
  { field: 'brand', headerName: 'Brand', width: 160 },
  { field: 'countInStock', headerName: 'Count in Stock', width: 160 },
];

const rows = [
  { id: 1, productName: 'Laptop', amount: 1200, brand: 'Dell', countInStock: 10 },
  { id: 2, productName: 'Smartphone', amount: 800, brand: 'Samsung', countInStock: 15 },
  { id: 3, productName: 'Tablet', amount: 400, brand: 'Apple', countInStock: 8 },
  { id: 4, productName: 'Desktop PC', amount: 1500, brand: 'HP', countInStock: 7 },
  { id: 5, productName: 'Headphones', amount: 100, brand: 'Sony', countInStock: 20 },
  { id: 6, productName: 'Keyboard', amount: 50, brand: 'Logitech', countInStock: 12 },
  { id: 7, productName: 'Monitor', amount: 300, brand: 'LG', countInStock: 5 },
  { id: 8, productName: 'Mouse', amount: 20, brand: 'Microsoft', countInStock: 18 },
  { id: 9, productName: 'Printer', amount: 200, brand: 'Epson', countInStock: 6 },
  { id: 10, productName: 'Camera', amount: 450, brand: 'Canon', countInStock: 9 },
];

export default function ProductPage() {
  return (
    <div>
      <DashBoardWrapper title="Products">
        <Paper style={{ height: 600, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </Paper>
      </DashBoardWrapper>
    </div>
  );
}
