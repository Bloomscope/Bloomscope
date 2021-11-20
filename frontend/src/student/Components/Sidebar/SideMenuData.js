import React from 'react';
import * as HiIcons from 'react-icons/hi';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';
	
export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/student/dashboard',
    icon: <FiIcons.FiDatabase />,
    cName: 'nav-text'
  },
  {
    title: 'Calendar',
    path: '/student/calendar',
    icon: <BsIcons.BsFillPenFill />,
    cName: 'nav-text'
  },
  {
    title: 'Suggestions',
    path: '/student/suggestions',
    icon: <BsIcons.BsFillPeopleFill />,
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