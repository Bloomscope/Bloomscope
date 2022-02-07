import React from 'react';
import * as HiIcons from 'react-icons/hi';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/im'
	
export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/parent/dashboard',
    icon: <IoIcons.ImHome3/>,
    cName: 'nav-text'
  },
  {
    title: 'Calendar',
    path: '/parent/calendar',
    icon: <BsIcons.BsFillCalendarEventFill/>,
    cName: 'nav-text'
  },
  {
    title: 'Personal suggestions',
    path: '/parent/suggestions',
    icon: <BsIcons.BsFillPenFill />,
    cName: 'nav-text'
  },
  {
    title: 'Announcements',
    path: '/parent/announcements',
    icon: <BsIcons.BsFillPeopleFill />,
    cName: 'nav-text'
  },
  {
    title: 'Helpline',
    path: '/parent/helpline',
    icon: <HiIcons.HiOutlineSpeakerphone />,
    cName: 'nav-text'
},
];