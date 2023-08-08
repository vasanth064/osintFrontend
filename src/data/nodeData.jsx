import {
  BiUserCircle,
  BiCurrentLocation,
  BiSolidPhoneCall,
} from 'react-icons/bi';
import {
  BsDatabaseFillExclamation,
  BsBank,
  BsGlobe,
  BsFillCalendarWeekFill,
  BsFillPhoneVibrateFill,
  BsPersonVcard,
  BsDatabaseFillGear,
} from 'react-icons/bs';
import {
  FaMobileAlt,
  FaAddressBook,
  FaLinkedin,
  FaReddit,
  FaInstagram,
  FaAmazon,
  FaFacebookSquare,
  FaBarcode,
  FaFilter,
} from 'react-icons/fa';
import { LiaBroadcastTowerSolid } from 'react-icons/lia';
import { MdNotificationsActive, MdError } from 'react-icons/md';
import { PiMediumLogoFill } from 'react-icons/pi';
import { SiBigbasket } from 'react-icons/si';
import { RiSpam3Fill } from 'react-icons/ri';
import { VscCompassActive } from 'react-icons/vsc';
import { CgUnavailable } from 'react-icons/cg';
import { GiNetworkBars } from 'react-icons/gi';
import { TbSocial, TbMailExclamation, TbMailCancel } from 'react-icons/tb';
import { TiTick } from 'react-icons/ti';
import { IoIosPeople } from 'react-icons/io';
import IconNode from '../components/IconNode';
const vishalNum = 9952802556;
const vishalMail = 'vishal@gmail.com';
const vishalUserName = 'mr.g0d';

export const emailNodes = [
  {
    id: 'A',
    type: 'input',
    data: {
      label: <IconNode icon={<BiUserCircle />} text={vishalMail} />,
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
      label: <IconNode icon={<TbSocial />} text='Social Media' />,
    },
    position: { x: 500, y: 250 },
    parentNode: 'A',
  },
  {
    id: 'A-4',
    data: {
      label: (
        <IconNode
          icon={<BsDatabaseFillExclamation />}
          text={`Data Breach
               Number Found`}
        />
      ),
    },
    position: { x: 900, y: 250 },
    parentNode: 'A',
  },
  {
    id: 'A-5',
    data: {
      label: <IconNode icon={<TbMailExclamation />} text='Blacklisted Mail' />,
    },
    position: { x: 1100, y: 250 },
    parentNode: 'A',
  },
  {
    id: 'A-6',
    data: {
      label: <IconNode icon={<TbMailCancel />} text='Spam reputation' />,
    },
    position: { x: 1300, y: 250 },
    parentNode: 'A',
  },
  {
    id: 'A-7',
    data: {
      label: (
        <IconNode
          icon={<FaLinkedin />}
          text='Username Active'
          description='linkedin.com'
        />
      ),
    },
    position: { x: 300, y: 500 },
    parentNode: 'A',
  },
  {
    id: 'A-8',
    data: {
      label: (
        <IconNode
          icon={<SiBigbasket />}
          text='Username Active'
          description='bigbasket.com'
        />
      ),
    },
    position: { x: 500, y: 500 },
    parentNode: 'A',
  },
  {
    id: 'A-9',
    data: {
      label: (
        <IconNode
          icon={<FaFacebookSquare />}
          text='Username - Active'
          description='facebook.com'
        />
      ),
    },
    position: { x: 700, y: 500 },
    parentNode: 'A',
  },
  {
    id: 'A-10',
    data: {
      label: <IconNode icon={<SiBigbasket />} text='2020 Data Breach' />,
    },
    position: { x: 900, y: 500 },
    parentNode: 'A',
  },
  {
    id: 'A-11',
    data: {
      label: <IconNode icon={<MdError />} text='No' />,
    },
    position: { x: 1100, y: 500 },
    parentNode: 'A',
  },
  {
    id: 'A-12',
    data: {
      label: <IconNode icon={<RiSpam3Fill />} text='3/10' />,
    },
    position: { x: 1300, y: 500 },
    parentNode: 'A',
  },
];

export const usernameNodes = [
  {
    id: 'A',
    type: 'input',
    data: {
      label: <IconNode icon={<BiUserCircle />} text={vishalUserName} />,
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
      label: <IconNode icon={<TbSocial />} text='Social Media' />,
    },
    position: { x: 500, y: 250 },
    parentNode: 'A',
  },
  {
    id: 'A-4',
    data: {
      label: (
        <IconNode
          icon={<BsDatabaseFillExclamation />}
          text='Data Breach'
          description='Number Found'
        />
      ),
    },
    position: { x: 0, y: 250 },
    parentNode: 'A',
  },
  {
    id: 'A-5',
    data: {
      label: (
        <IconNode
          icon={<BsBank />}
          text='Banking Name'
          description='Vishal M L'
        />
      ),
    },
    position: { x: 0, y: 500 },
    parentNode: 'A',
  },
  {
    id: 'A-6',
    data: {
      label: (
        <IconNode
          icon={<FaLinkedin />}
          text='Username Active'
          description='linkedin.com'
        />
      ),
    },
    position: { x: 250, y: 500 },
    parentNode: 'A',
  },
  {
    id: 'A-7',
    data: {
      label: (
        <IconNode
          icon={<SiBigbasket />}
          text='Username Active'
          description='bigbasket.com'
        />
      ),
    },
    position: { x: 450, y: 500 },
    parentNode: 'A',
  },
  {
    id: 'A-8',
    data: {
      label: (
        <IconNode
          icon={<PiMediumLogoFill />}
          text='Username Active'
          description='medium.com'
        />
      ),
    },
    position: { x: 650, y: 500 },
    parentNode: 'A',
  },
  {
    id: 'A-9',
    data: {
      label: <IconNode icon={<SiBigbasket />} text='2020 Data Breach' />,
    },
    position: { x: 850, y: 500 },
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
    position: { x: 300, y: 250 },
    parentNode: 'A',
  },
  {
    id: 'A-3',
    data: {
      label: <IconNode icon={<GiNetworkBars />} text='Airtel' />,
    },
    position: { x: 600, y: 250 },
    parentNode: 'A',
  },
  {
    id: 'A-4',
    data: {
      label: <IconNode icon={<TbSocial />} text='User Registered Sites' />,
    },
    position: { x: 1200, y: 250 },
    parentNode: 'A',
  },
  {
    id: 'A-5',
    data: {
      label: <IconNode icon={<CgUnavailable />} text='Number Not Found' />,
    },
    position: { x: 1500, y: 250 },
    parentNode: 'A',
  },
  {
    id: 'A-6',
    data: {
      label: (
        <IconNode
          icon={<FaLinkedin />}
          text='Username Found'
          description='linkedin.com'
        />
      ),
    },
    position: { x: 50, y: 500 },
    parentNode: 'A',
  },
  {
    id: 'A-7',
    data: {
      label: (
        <IconNode
          icon={<FaReddit />}
          text='Username Found'
          description='reddit.com'
        />
      ),
    },
    position: { x: 250, y: 500 },
    parentNode: 'A',
  },
  {
    id: 'A-8',
    data: {
      label: <IconNode icon={<TiTick />} text='Valid' />,
    },
    position: { x: 450, y: 500 },
    parentNode: 'A',
  },
  {
    id: 'A-9',
    data: {
      label: <IconNode icon={<BiCurrentLocation />} text='Coimbatore' />,
    },
    position: { x: 650, y: 500 },
    parentNode: 'A',
  },
  {
    id: 'A-10',
    data: {
      label: <IconNode icon={<VscCompassActive />} text='Active' />,
    },
    position: { x: 850, y: 500 },
    parentNode: 'A',
  },
  {
    id: 'A-11',
    data: {
      label: <IconNode icon={<FaInstagram />} text='Instagram - Active' />,
    },
    position: { x: 1050, y: 500 },
    parentNode: 'A',
  },
  {
    id: 'A-12',
    data: {
      label: <IconNode icon={<SiBigbasket />} text='Bigbasket - Active' />,
    },
    position: { x: 1250, y: 500 },
    parentNode: 'A',
  },
  {
    id: 'A-13',
    data: {
      label: <IconNode icon={<FaAmazon />} text='Amazon - Active' />,
    },
    position: { x: 1450, y: 500 },
    parentNode: 'A',
  },
];

export const summaryNodes = [
  {
    id: 'A-9',
    data: {
      label: (
        <IconNode icon={<LiaBroadcastTowerSolid />} text='Dumped Data 1' />
      ),
    },
    position: { x: 0, y: 0 },
  },
  {
    id: 'A-10',
    data: {
      label: (
        <IconNode icon={<LiaBroadcastTowerSolid />} text='Dumped Data 2' />
      ),
    },
    position: { x: 300, y: 0 },
  },
  {
    id: 'A-1',
    data: {
      label: (
        <IconNode
          icon={<BsDatabaseFillGear />}
          text='Dumped data from cellphone towers'
        />
      ),
    },
    position: { x: 0, y: 300 },
  },
  {
    id: 'A-2',
    type: 'input',
    data: { label: <IconNode icon={<BsPersonVcard />} text='By cell ID' /> },
    position: { x: 200, y: 300 },
  },
  {
    id: 'A-7',
    data: { label: <IconNode icon={<BsGlobe />} text='By IMSI Number' /> },
    position: { x: 0, y: 600 },
  },
  {
    id: 'A',
    data: {
      label: (
        <IconNode
          icon={<FaFilter />}
          text='Filter Data using various filters'
        />
      ),
    },
    position: { x: 300, y: 600 },
  },
  {
    id: 'A-8',
    data: {
      label: (
        <IconNode icon={<IoIosPeople />} text='Common B Party among Numbers' />
      ),
    },
    position: { x: 600, y: 600 },
  },
  {
    id: 'A-3',
    data: {
      label: (
        <IconNode icon={<BsFillPhoneVibrateFill />} text='By Phone Number' />
      ),
    },
    position: { x: 400, y: 400 },
    parentNode: 'A',
  },
  {
    id: 'A-4',
    data: {
      label: (
        <IconNode icon={<BiSolidPhoneCall />} text='Filter by Call-type' />
      ),
    },
    position: { x: 600, y: 400 },
    parentNode: 'A',
  },
  {
    id: 'A-5',
    data: { label: <IconNode icon={<FaBarcode />} text='By IMEI Number' /> },
    position: { x: 800, y: 400 },
    parentNode: 'A',
  },
  {
    id: 'A-6',
    data: {
      label: (
        <IconNode
          icon={<BsFillCalendarWeekFill />}
          text='FIlter by Date & Time'
        />
      ),
    },
    position: { x: 1000, y: 400 },
    parentNode: 'A',
  },
];
