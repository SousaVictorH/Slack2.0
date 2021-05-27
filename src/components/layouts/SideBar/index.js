import React from 'react';

// MOCK

import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

import SideBarHeader from './SideBarHeader';
import SideBarOption from './SideBarOption';

import { Container } from './styles';

import { db } from '../../../firebase';

import { useCollection } from 'react-firebase-hooks/firestore';

function SideBar() {
    const [channels] = useCollection(db.collection('rooms'));

    return(
        <Container>
            <SideBarHeader />
            
                <SideBarOption Icon={InsertCommentIcon} title="Threads"/>
                <SideBarOption Icon={InboxIcon} title="Mentions & reactions"/>
                <SideBarOption Icon={DraftsIcon} title="Saved items"/>
                <SideBarOption Icon={BookmarkBorderIcon} title="Channel browser"/>

                <SideBarOption Icon={PeopleAltIcon} title="People & user groups"/>
                <SideBarOption Icon={AppsIcon} title="Apps"/>
                <SideBarOption Icon={FileCopyIcon} title="File browser"/>
                <SideBarOption Icon={ExpandLessIcon} title="Show less"/>

                <hr />
                <SideBarOption Icon={ExpandMoreIcon} title="Channels"/>
                <hr />

                <SideBarOption Icon={AddIcon} addChannelOption title="Add Channel"/>

            
                {channels?.docs.map(doc => (
                    <SideBarOption
                        key={doc.id}
                        id={doc.id}
                        title={doc.data().name}
                    />
                ))}
        </Container>
    );
}

export default SideBar;
