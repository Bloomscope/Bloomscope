import React from 'react';
import * as HiIcons from 'react-icons/hi';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/parent/dashboard',
    icon: <FiIcons.FiDatabase />,
    cName: 'nav-text'
  },
  {
    title: 'Calendar',
    path: '/parent/calendar',
    icon: <BsIcons.BsFillPenFill />,
    cName: 'nav-text'
  },
  {
    title: 'Suggestions',
    path: '/parent/suggestions',
    icon: <BsIcons.BsFillPeopleFill />,
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