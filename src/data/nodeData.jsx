import { BiUserCircle, BiCurrentLocation } from 'react-icons/bi';
import { FaMobileAlt, FaAddressBook } from 'react-icons/fa';
import { MdNotificationsActive } from 'react-icons/md';
import { GiNetworkBars } from 'react-icons/gi';
import { TbSocial, TbDatabaseExclamation } from 'react-icons/tb';
import { TiTick } from 'react-icons/ti';

import IconNode from '../components/IconNode';
const vishalNum = 9952802556;

export const emailNodes = [
  {
    id: 'A',
    type: 'input',
    data: {
      label: <IconNode icon={<BiUserCircle />} text={vishalNum} />,
    },
    position: { x: 0, y: 0 },
  },
  {
    id: 'A-1',
    data: {
      label: (
        <IconNode
          icon={<FaMobileAlt />}
          text='UPI ID'
          description={`
          ${vishalNum}@axl
          ${vishalNum}@ibl
          ${vishalNum}@ybl
          `}
        />
      ),
    },
    position: { x: 0, y: 250 },
    parentNode: 'A',
  },
  {
    id: 'A-2',
    data: {
      label: <IconNode icon={<FaAddressBook />} text='Name : Vishal ML KCT' />,
    },
    position: { x: 200, y: 250 },
    parentNode: 'A',
  },
  {
    id: 'A-3',
    data: {
      label: <IconNode icon={<GiNetworkBars />} text='Airtel' />,
    },
    position: { x: 400, y: 250 },
    parentNode: 'A',
  },
  {
    id: 'A-4',
    data: {
      label: <IconNode icon={<TbSocial />} text='User Registered Sites' />,
    },
    position: { x: 600, y: 250 },
    parentNode: 'A',
  },
  {
    id: 'A-5',
    data: {
      label: (
        <IconNode icon={<TbDatabaseExclamation />} text='Number Not Found' />
      ),
    },
    position: { x: 800, y: 250 },
    parentNode: 'A',
  },
  {
    id: 'A-6',
    data: {
      label: (
        <IconNode
          icon={<TbDatabaseExclamation />}
          text='Username Found'
          description='linkedin.com'
        />
      ),
    },
    position: { x: 200, y: 600 },
    parentNode: 'A',
  },
  {
    id: 'A-7',
    data: {
      label: (
        <IconNode
          icon={<TbDatabaseExclamation />}
          text='Username Found'
          description='reddit.com'
        />
      ),
    },
    position: { x: 400, y: 600 },
    parentNode: 'A',
  },
  {
    id: 'A-8',
    data: {
      label: <IconNode icon={<TiTick />} text='Valid' />,
    },
    position: { x: 600, y: 900 },
    parentNode: 'A',
  },
  {
    id: 'A-9',
    data: {
      label: <IconNode icon={<BiCurrentLocation />} text='Coimbatore' />,
    },
    position: { x: 800, y: 900 },
    parentNode: 'A',
  },
  {
    id: 'A-10',
    data: {
      label: <IconNode icon={<MdNotificationsActive />} text='Active' />,
    },
    position: { x: 1000, y: 900 },
    parentNode: 'A',
  },
  {
    id: 'A-11',
    data: {
      label: (
        <IconNode icon={<TbDatabaseExclamation />} text='Instagram - Active' />
      ),
    },
    position: { x: 800, y: 500 },
    parentNode: 'A',
  },
  {
    id: 'A-12',
    data: {
      label: (
        <IconNode icon={<TbDatabaseExclamation />} text='Bigbasket - Active' />
      ),
    },
    position: { x: 1000, y: 500 },
    parentNode: 'A',
  },
  {
    id: 'A-13',
    data: {
      label: (
        <IconNode icon={<TbDatabaseExclamation />} text='Amazon - Active' />
      ),
    },
    position: { x: 1200, y: 500 },
    parentNode: 'A',
  },
];

export const usernameNodes = [
  {
    id: 'A',
    type: 'input',
    data: { label: 'Parent Node 1' },
    position: { x: 500, y: 0 },
  },
  {
    id: 'A-1',
    data: { label: 'Child Node 1' },
    position: { x: 0, y: 90 },
    parentNode: 'A',
  },
  {
    id: 'A-2',
    data: { label: 'Child Node 2' },
    position: { x: 200, y: 90 },
    parentNode: 'A',
  },
  {
    id: 'A-3',
    data: { label: 'Child Node 3' },
    position: { x: 400, y: 90 },
    parentNode: 'A',
  },
  {
    id: 'A-4',
    data: { label: 'Child Node 4' },
    FaMobileAlt,
  },
  {
    id: 'A-5',
    data: { label: 'Child Node 5' },
    position: { x: 800, y: 90 },
    parentNode: 'A',
  },
];
export const mobileNodes = [
  {
    id: 'A',
    type: 'input',
    data: {
      label: <IconNode icon={<BiUserCircle />} text={vishalNum} />,
    },
    position: { x: 0, y: 0 },
  },
  {
    id: 'A-1',
    data: {
      label: (
        <IconNode
          icon={<FaMobileAlt />}
          text='UPI ID'
          description={`
          ${vishalNum}@axl
          ${vishalNum}@ibl
          ${vishalNum}@ybl
          `}
        />
      ),
    },
    position: { x: 0, y: 250 },
    parentNode: 'A',
  },
  {
    id: 'A-2',
    data: {
      label: <IconNode icon={<FaAddressBook />} text='Name : Vishal ML KCT' />,
    },
    position: { x: 200, y: 250 },
    parentNode: 'A',
  },
  {
    id: 'A-3',
    data: {
      label: <IconNode icon={<GiNetworkBars />} text='Airtel' />,
    },
    position: { x: 400, y: 250 },
    parentNode: 'A',
  },
  {
    id: 'A-4',
    data: {
      label: <IconNode icon={<TbSocial />} text='User Registered Sites' />,
    },
    position: { x: 600, y: 250 },
    parentNode: 'A',
  },
  {
    id: 'A-5',
    data: {
      label: (
        <IconNode icon={<TbDatabaseExclamation />} text='Number Not Found' />
      ),
    },
    position: { x: 800, y: 250 },
    parentNode: 'A',
  },
  {
    id: 'A-6',
    data: {
      label: (
        <IconNode
          icon={<TbDatabaseExclamation />}
          text='Username Found'
          description='linkedin.com'
        />
      ),
    },
    position: { x: 200, y: 600 },
    parentNode: 'A',
  },
  {
    id: 'A-7',
    data: {
      label: (
        <IconNode
          icon={<TbDatabaseExclamation />}
          text='Username Found'
          description='reddit.com'
        />
      ),
    },
    position: { x: 400, y: 600 },
    parentNode: 'A',
  },
  {
    id: 'A-8',
    data: {
      label: <IconNode icon={<TiTick />} text='Valid' />,
    },
    position: { x: 600, y: 900 },
    parentNode: 'A',
  },
  {
    id: 'A-9',
    data: {
      label: <IconNode icon={<BiCurrentLocation />} text='Coimbatore' />,
    },
    position: { x: 800, y: 900 },
    parentNode: 'A',
  },
  {
    id: 'A-10',
    data: {
      label: <IconNode icon={<MdNotificationsActive />} text='Active' />,
    },
    position: { x: 1000, y: 900 },
    parentNode: 'A',
  },
  {
    id: 'A-11',
    data: {
      label: (
        <IconNode icon={<TbDatabaseExclamation />} text='Instagram - Active' />
      ),
    },
    position: { x: 800, y: 500 },
    parentNode: 'A',
  },
  {
    id: 'A-12',
    data: {
      label: (
        <IconNode icon={<TbDatabaseExclamation />} text='Bigbasket - Active' />
      ),
    },
    position: { x: 1000, y: 500 },
    parentNode: 'A',
  },
  {
    id: 'A-13',
    data: {
      label: (
        <IconNode icon={<TbDatabaseExclamation />} text='Amazon - Active' />
      ),
    },
    position: { x: 1200, y: 500 },
    parentNode: 'A',
  },
];

export const summaryNodes = [
  {
    id: 'A',
    type: 'input',
    data: { label: 'Parent Node 1' },
    position: { x: 500, y: 0 },
  },
  {
    id: 'A-1',
    data: { label: 'Child Node 1' },
    position: { x: 0, y: 90 },
    parentNode: 'A',
  },
  {
    id: 'A-2',
    data: { label: 'Child Node 2' },
    position: { x: 200, y: 90 },
    parentNode: 'A',
  },
  {
    id: 'A-3',
    data: { label: 'Child Node 3' },
    position: { x: 400, y: 90 },
    parentNode: 'A',
  },
  {
    id: 'A-4',
    data: { label: 'Child Node 4' },
    position: { x: 600, y: 90 },
    parentNode: 'A',
  },
  {
    id: 'A-5',
    data: { label: 'Child Node 5' },
    position: { x: 800, y: 90 },
    parentNode: 'A',
  },
];
