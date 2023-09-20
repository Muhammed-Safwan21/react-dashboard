import * as React from "react";

import { Avatar, Grid, Stack, Typography } from "@mui/material";

import DashBoardWrapper  from "../../components/DashBoardWrapper";
import { Paper } from "@mui/material";
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupIcon from '@mui/icons-material/Group';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import UndoIcon from '@mui/icons-material/Undo';

const drawerWidth = 240;
export default function DashboardaPage() {
  return (
    <DashBoardWrapper title="Dashboard">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper sx={{ p: 3 }}>
            <PageItem title="Orders" number="235" color="#1976d2" icon={<InventoryIcon/>}/>
          
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ p: 3 }}>
          <PageItem title="Users" number="25" color='#1976d2' icon={<GroupIcon/>}/>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ p: 3 }}>
          <PageItem title="Revenue" number="4,425" color="#1976d2" icon={<AttachMoneyIcon/>}/>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ p: 3 }}>
          <PageItem title="Orders" number="$209" color="#1976d2" icon={<UndoIcon/>}/>
          </Paper>
        </Grid>
      </Grid>
    </DashBoardWrapper>
  );
}


const PageItem=({title,number,color,icon})=>{
    return<Stack direction="row" spacing={2} alignItems="center">
    <Avatar sx={{backgroundColor:{color},width:54,height:54}}>
    {icon}


    </Avatar>
   <div>
   <Typography color="primary">{title}</Typography>
   <Typography variant="h4">{number}</Typography>
   </div>
</Stack>
}