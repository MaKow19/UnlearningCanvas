import { Stack, Card } from '@mui/material';
import Cell from '../Components/Cell';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks5Icon from '@mui/icons-material/Looks5';
import Looks6Icon from '@mui/icons-material/Looks6';
import GroupsIcon from '@mui/icons-material/Groups';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import FeedbackIcon from '@mui/icons-material/Feedback';
import StorageIcon from '@mui/icons-material/Storage';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';

const Layout = () => {
    return (
        
            <Stack width={'2px'} display={'flex'} direction={'row'} justifyContent={'center'} spacing={2} useFlexGap flexWrap="wrap" minWidth={'1800px'}>
                <Card>
                    <Stack bgcolor={'#ffffff'} sx={{ minWidth: 300, minHeight: 500, overflow: 'auto', width: 190, height: 424, border: 'solid'}}>
                        <Cell index={0} title={'Festlegung der Rahmenbendingen'} ></Cell>
                    </Stack>
                </Card>
                <Card>
                    <Stack bgcolor={'#ffffff'} sx={{ minWidth: 300, minHeight: 500, overflow: 'auto', width: 190, height: 424, border: 'solid'}}>
                        <Cell index={1} title={'Hinweise erfassen'} numberIcon={<LooksOneIcon/>} titleIcon={<LiveHelpIcon/>}></Cell>
                    </Stack>
                </Card>
                <Card>
                    <Stack bgcolor={'#ffffff'} sx={{ minWidth: 300, minHeight: 500, overflow: 'auto', width: 190, height: 424, border: 'solid'}}>
                        <Cell index={2} title={'Festlegung des Hinweises'} numberIcon={<LooksTwoIcon/>} titleIcon={<FeedbackIcon/>}></Cell>
                    </Stack>
                </Card>
                <Card>
                    <Stack bgcolor={'#ffffff'} sx={{ minWidth: 300, minHeight: 500, overflow: 'auto', width: 190, height: 424, border: 'solid'}}>
                        <Cell index={3} title={'Teamreflektion'} numberIcon={<Looks3Icon/>} titleIcon={<GroupsIcon/>}></Cell>
                    </Stack>
                </Card>
                
                <Stack>
                    <Card>
                        <Stack bgcolor={'#ffffff'} sx={{ minWidth: 300, maxHeight: 239, overflow: 'auto', width: 190, height: 424, border: 'solid'}}>
                            <Cell index={4} title={'Proaktiv Hindernisse erkennen'} numberIcon={<Looks4Icon/>} titleIcon={<LiveHelpIcon/>}></Cell>
                        </Stack>
                    </Card>
                    <Card sx={{mt: 2}}>
                        <Stack bgcolor={'#ffffff'} sx={{minWidth: 300, maxHeight: 239, overflow: 'auto', width: 190, height: 424, border: 'solid'}}>
                            <Cell index={5} title={'Gemeinsames Verständnis der Beteiligten'} numberIcon={<Looks5Icon/>} titleIcon={<InterpreterModeIcon/>}></Cell>
                        </Stack>
                    </Card>
                </Stack>
                <Card>
                    <Stack bgcolor={'#ffffff'} sx={{ direction: 'row', minWidth: 200, maxHeight: 300, overflow: 'auto', width: 1465, height: 424, border: 'solid'}}>
                        <Cell index={6} title={'Sensing Datenbank'} numberIcon={<Looks6Icon/>} titleIcon={<StorageIcon/>}></Cell>
                    </Stack>
                </Card>
            </Stack>
        
    )
}
export default Layout;