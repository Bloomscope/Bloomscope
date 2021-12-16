import React from 'react';
import * as HiIcons from 'react-icons/hi';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';
import * as ImIcons from 'react-icons/im'
	
export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/student/dashboard',
    icon: <ImIcons.ImHome/>,
    cName: 'nav-text'
  },
  {
    title: 'Calendar',
    path: '/student/calendar',
    icon: <BsIcons.BsFillCalendarEventFill/>,
    cName: 'nav-text'
  },
  {
    title: 'Suggestions',
    path: '/student/suggestions',
    icon: <BsIcons.BsFillPenFill />,
    cName: 'nav-text'
  },
  {
    title: 'Announcements',
    path: '/student/announcements',
    icon: <BsIcons.BsFillPeopleFill />,
    cName: 'nav-text'
  },
  {
    title: 'Helpline',
    path: '/student/helpline',
    icon: <HiIcons.HiOutlineSpeakerphone />,
    cName: 'nav-text'
},
];