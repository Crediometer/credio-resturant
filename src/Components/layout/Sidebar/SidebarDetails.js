import {FiHome} from 'react-icons/fi'
import {BiCategory, BiSolidCategory} from 'react-icons/bi'
import {IoLocationOutline, IoNotifications, IoNotificationsOutline} from 'react-icons/io5'
import { TbClockCheck } from "react-icons/tb";
import {MdShoppingCartCheckout} from 'react-icons/md'
import {BsBoxSeam} from 'react-icons/bs'
export const mainsidebar = [
    {
        title:"Dashboard",
        icon:<FiHome/>,
        link:"/home"
    },
    {
        title:"Menu",
        icon:<TbClockCheck/>,
        link:"/home/menu"
    },
    {
        title:"Table View",
        icon:<IoLocationOutline/>,
        link:"/home/table-view"
    },
    {
        title:"Reservation",
        icon:<BsBoxSeam/>,
        link:"/home/reservation"
    },   
]
