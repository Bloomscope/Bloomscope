import React from 'react';
import * as HiIcons from 'react-icons/hi';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'StudentData',
    path: '/admin/StudentData',
    icon: <FiIcons.FiDatabase />,
    cName: 'nav-text'
  },
  {
    title: 'Test Creation',
    path: '/admin/testCreation',
    icon: <BsIcons.BsFillPenFill />,
    cName: 'nav-text'
  },
  {
    title: 'Add Questions',
    path: '/admin/addquestions',
    icon: <IoIcons.IoMdAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Announcements',
    path: '/admin/announcements',
    icon: <HiIcons.HiOutlineSpeakerphone />,
    cName: 'nav-text'
},
{
  title: 'Token Verification',
  path: '/admin/token',
  icon: <HiIcons.HiOutlineCheck />,
  cName: 'nav-text'
},
{
  title: 'Mass Registration',
  path: '/admin/massregistration',
  icon: <BsIcons.BsFillPeopleFill />,
  cName: 'nav-text'
},
];