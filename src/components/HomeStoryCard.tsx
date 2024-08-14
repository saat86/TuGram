
import { Avatar, Box, Button, Typography } from '@mui/material'

type Props = {}

const HomeStoryCard = (props: Props) => {
  return (
    <button style={{
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        textAlign: 'center',
        marginRight:'10px'
      }}>
          <Box>
              <Box sx={{display:'flex', justifyContent:'center'}}>
          <Avatar sx={{ width: 56, height: 56 }} src="https://as2.ftcdn.net/v2/jpg/08/75/45/97/1000_F_875459719_8i7J3atGbsDoRPT0ZW0DjBpgAFVTrKAe.jpg"/>
          </Box>
          <Typography variant='body1'>profile</Typography>

          </Box>
        
      </button>
  )
}

export default HomeStoryCard