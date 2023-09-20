import { Button, Checkbox, Divider, FormControlLabel, Paper, Stack, Switch, Typography } from "@mui/material";
import  DashBoardWrapper  from "../../components/DashBoardWrapper";


export default function SettingsPage(){
    return <div>
        <DashBoardWrapper title="Settings">
            <Paper sx={{p:3}}>
               <Stack gap={2}>
               <Stack direction="row" alignItems="center">
                    <Typography sx={{flexGrow:1}}>Allow Notification</Typography>
                    <Switch defaultChecked />
                </Stack>

                <Stack direction="row" alignItems="center">
                    <Typography sx={{flexGrow:1}}>Allow Returns</Typography>
                    <Switch defaultChecked />
                </Stack>

                <Divider/>

                <Stack direction="row" alignItems="center">
                    <Typography sx={{flexGrow:1}}>Accepted Payments</Typography>
                    <Stack direction="row-reverse">
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Cards" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="UPI" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Cash on Delivery" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Pay Later" />
                    </Stack>
                </Stack>

                <Button variant="contained" sx={{marginTop:5}}>Save</Button>
               </Stack>

            </Paper>
            
        </DashBoardWrapper>

    </div>
}