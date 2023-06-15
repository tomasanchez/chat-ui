import {Avatar, Box, Button, Divider, Drawer, ListItemAvatar} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import AddCommentIcon from '@mui/icons-material/AddComment';

const ChatNav = () => {

    return (
        <Box component="nav">
            <Drawer variant="permanent" open={true}>
                <div>
                    <List>
                        <ListItem>
                            <Button variant="outlined"
                                    size="large"
                                    sx={{width: '100%'}}
                                    startIcon={<AddCommentIcon/>}>
                                New Chat
                            </Button>
                        </ListItem>
                    </List>

                    <Divider/>
                    <List sx={{height: '84vh'}}>
                        {['Help with FastAPI', 'Flask Migration',
                            'Vite and Typescript'].map((text, index) => (
                            <ListItem key={`${index}-${text}`} disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={text}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider/>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar alt="Jane Doe"
                                        src="https://raw.githubusercontent.com/tomasanchez/ichnaea-bug_tracker/main/src/main/resources/avatar/woman_avatar_1.png"/>
                            </ListItemAvatar>
                            <ListItemText primary="Jane Doe"/>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </Box>
    );

}

export default ChatNav;