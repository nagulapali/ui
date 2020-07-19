import React from 'react';
import Compose from '../../screens/compose/Compose';
import Inbox from '../../screens/Inbox/Inbox';
import Starred from '../../screens/starred/Starred';
import Video from '../../screens/video/Video';
import Social from '../../screens/social/Social';
import Pro from '../../screens/pro/Pro';
import SubNav from '../../screens/subNav/SubNav';

import {
    PlusCircleOutlined ,
    InboxOutlined ,
    StarFilled ,
    VideoCameraOutlined,
    TagOutlined, 
    TagsOutlined ,
    MailOutlined 
} from '@ant-design/icons';

const routes=[    
    { 
        name:"Compose",
        icon:<PlusCircleOutlined   />,
        path:"/compose",
        module: Compose,
        childern:[]
    },
    {
        name:"Inbox",
        icon: <InboxOutlined />,
        path:"/inbox",
        module: Inbox,
        childern:[]
    },
    {
        name:"starred",
        icon: <StarFilled />,
        path:"/starred",
        module: Starred,
        childern:[]
    },
    {
        name:"Video metting",
        icon: <VideoCameraOutlined />,
        path:"/video",
        module: Video,
        childern:[]
    },
    {
        name:"Categories",
        icon: <TagsOutlined />,
        path:"subNav",
        module: SubNav,
        childern:[
            {
                name:"Promotions",
                icon: <TagOutlined />,
                path:"/subNav/subNav1",
                module:Pro            
            },
            {
                name:"Social",
                icon: <MailOutlined />,
                path:"/subNav/subNav2",
                module: Social             
            }
        ]
    }

]

export default routes;