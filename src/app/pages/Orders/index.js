import  DashBoardWrapper  from "../../components/DashBoardWrapper";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper } from "@mui/material";

const columns = [
  { field: 'id', headerName: 'Product ID', width: 70 },
  { field: 'productName', headerName: 'Product Name', width: 200 }, // Updated to 'Product Name'
  { field: 'amount', headerName: 'Amount', type: 'number', width: 90 },
  { field: 'userName', headerName: 'User Name', width: 150 }, // Updated to 'User Name'
  {
    field: 'status',
    headerName: 'Status',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  { field: 'address', headerName: 'Address', width: 250 }, // Updated to 'Address'
];


const rows = [
  { id: 1, productName: 'Laptop', amount: 1200, userName: 'JohnDoe', status: 'In Stock', address: '123 Main St' },
  { id: 2, productName: 'Smartphone', amount: 800, userName: 'JaneSmith', status: 'Out of Stock', address: '456 Elm St' },
  { id: 3, productName: 'Tablet', amount: 400, userName: 'BobJohnson', status: 'In Stock', address: '789 Oak St' },
  { id: 4, productName: 'Desktop PC', amount: 1500, userName: 'AryaStark', status: 'In Stock', address: '321 Pine St' },
  { id: 5, productName: 'Headphones', amount: 100, userName: 'DaenerysTargaryen', status: 'Out of Stock', address: '654 Cedar St' },
  { id: 6, productName: 'Monitor', amount: 300, userName: 'Melisandre', status: 'In Stock', address: '987 Maple St' },
  { id: 7, productName: 'Keyboard', amount: 50, userName: 'FerraraClifford', status: 'In Stock', address: '234 Birch St' },
  { id: 8, productName: 'Mouse', amount: 20, userName: 'RossiniFrances', status: 'Out of Stock', address: '876 Redwood St' },
  { id: 9, productName: 'Printer', amount: 200, userName: 'HarveyRoxie', status: 'In Stock', address: '543 Cedar St' },
];

export default function OrdersPage(){
    return <div>
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
}