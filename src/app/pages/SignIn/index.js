import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function SingnInPage() {
    const navigate=useNavigate()
    const handleSubmit=(event)=>{
        event.preventDefault();
        navigate('/')
    }
  return (
    <div>
      <Container maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h5">Sign In</Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{mt:2 , alignSelf:"stretch"}}>
            <TextField margin="normal" fullWidth name="Eamil" type="email" label="Email address" required/>
            <TextField margin="normal" fullWidth name="Password" type="password" label="Password" required/>
            <Button fullWidth type="submit" variant="contained" sx={{mt:1}} >Sign In</Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
