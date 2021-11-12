import React from 'react';
import * as HiIcons from 'react-icons/hi';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
  {
    title: 'StudentData',
    path: '/admin/StudentData',
    icon: <FiIcons.FiDatabase />,
    cName: 'nav-text'
  },
  {
    title: 'TestCreation',
    path: '/admin/testCreation',
    icon: <BsIcons.BsFillPenFill />,
    cName: 'nav-text'
  },
  {
    title: 'Announcements',
    path: '/admin/announcements',
    icon: <HiIcons.HiOutlineSpeakerphone />,
    cName: 'nav-text'
},
];