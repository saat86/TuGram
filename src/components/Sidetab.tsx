import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { WidthFull } from '@mui/icons-material';
import { Typography } from '@mui/material';

type Props = {}

function Sidetab({}: Props) {
  return (
    <Box sx={{ width: '200px', bgcolor: 'background.paper' }}>
        < Box>
        <Typography variant='h5'>TuGram</Typography>
        </Box>
      <nav aria-label="main mailbox folders">
        <List >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
     
    </Box>
  )
}

export default Sidetab