import "./Report.css"
import { useState } from "react";
import { HiOutlineFunnel } from "react-icons/hi2";
import { IoMdFunnel } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { GoColumns, GoRows } from "react-icons/go";
import { FiPrinter } from "react-icons/fi";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaPrint } from "react-icons/fa";
import Navbar from "../../Components/layout/Navbar/Navbar";


function createData(status, order, total, time) {
    return { status, order, total, time };
}
    
const rows = [
    createData(0, "Scrambled eggs, toast large, Smoked Salomin small Wifles medium, Lemoniade", 5, "10min :20 sec"),
    createData(1, "Scrambled eggs, toast large, Smoked Salomin small Wifles medium, Lemoniade", 5, "10min :20 sec"),
    createData(0, "Scrambled eggs, toast large, Smoked Salomin small Wifles medium, Lemoniade", 5, "10min :20 sec"),
    createData(1, "Scrambled eggs, toast large, Smoked Salomin small Wifles medium, Lemoniade", 5, "10min :20 sec"),
    createData(0, "Scrambled eggs, toast large, Smoked Salomin small Wifles medium, Lemoniade", 5, "10min :20 sec"),
];
const Report = () => {
    const [selected, setselected] = useState(0)

    const handleAll = () =>{
        setselected(0)
    }
    const handleComplete = () =>{
        setselected(1)
    }
    const handleCancle = () =>{
        setselected(2)
    }
    return ( 
        <div className="transaction">
            <Navbar pageName="Report"/>
            <div className="transaction-top">
            <FiPrinter />
            </div>
            <div className="transaction-body">
                <div className="transaction-table-top">
                    <div className="transaction-top-period">
                        <div onClick={handleAll} className={selected == 0 ? "period selected-period" : "period"}>
                            <p>All</p>
                        </div>
                        <div onClick={handleComplete} className={selected == 1 ? "period selected-period" : "period"}>
                            <p>Completed</p>
                        </div>
                        <div onClick={handleCancle} className={selected == 2  ? "period selected-period" : "period"}>
                            <p>Canceled</p>
                        </div>
                    </div>
                    <div className="transaction-top-filter">
                        <div className="filter-sort">
                            <HiOutlineFunnel />
                            <p>Filter</p>
                        </div>
                        <div className="filter-sort">
                            <IoMdFunnel />
                            <p>Sort</p>
                        </div>
                        <div className="column">
                            <GoColumns />
                        </div>
                        <div className="row">
                            <GoRows/>
                        </div>
                        <div className="filter-search">
                            <CiSearch/>
                            <input
                            placeholder="Search menu..."
                            >
                            </input>
                        </div>
                    </div>
                    {/* <div className="transaction-top-print">
                        <FiPrinter />
                    </div> */}
                </div>
                <div className="transaction-table">
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {(row.status == 0)?(
                                        <div className="transaction-completed">
                                            <div></div>
                                            <p>Completed</p>
                                        </div>
                                    ): (row.status == 1)?(
                                        <div className="transaction-pending">
                                            <div></div>
                                            <p>Pending</p>
                                        </div>
                                    ):(
                                        <div className="transaction-failed">
                                            <div></div>
                                            <p>Canceled</p>
                                        </div>
                                    )}
                                </TableCell>
                                <TableCell align="left">
                                    <p className='card-details'>{row.order}</p>
                                </TableCell>
                                <TableCell align="left">
                                    <p className='card-details'>Total orders: {row.total}</p>
                                </TableCell>
                                <TableCell align="left">
                                    <p className='card-type'>{row.time}</p>
                                </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    );
}
 
export default Report;