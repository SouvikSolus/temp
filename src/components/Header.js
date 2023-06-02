import React from "react"
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import TripOriginRoundedIcon from '@mui/icons-material/TripOriginRounded';

function Header() {
    return ( 
        <div className="">
            <nav className="navbar navbar-expand-lg navbar bg-[#FFFFFF]">
                <div className="container-fluid">
                    <a className="navbar-brand h-20 flex items-center" href="#" >
                        <img 
                            className="p-0"
                            src="Solus_logo.png"
                            height="145px"
                            width="145px"
                            loading="lazy"
                        />
                    </a>
                    
                    <div className="ml-0" id="navbarNav">
                        <ul className="ml-0 navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Date&Var</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Integration</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Onboarding</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Recommender</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Campaign</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Segments</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Performance</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Recommender</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Insights</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Intelligence</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">SysOps</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">DLP</a>
                            </li>

                            <li>
                                <a className="nav-link">
                                    <SearchIcon />
                                </a>
                            </li>
                            
                            <li>
                                <a className="nav-link">
                                    <CalendarTodayIcon style={{color:"00B0F0"}}/>
                                </a>
                            </li>
                            
                            <li>
                                <a className="nav-link">
                                    <AccessAlarmIcon style={{color:"00B0F0"}}/>
                                </a>
                            </li>

                            <li>
                                <a className="nav-link">
                                    <img 
                                        src="client_logo.png"
                                        height="600px"
                                        width="600px"
                                    />
                                </a>
                            </li>
                            
                            <div  id="navbarNavDarkDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <button className="btn dropdown-toggle text-[#00B0F0]"  data-bs-toggle="dropdown" aria-expanded="false">
                                            User
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">User Management</a></li>
                                            <li><a className="dropdown-item" href="#">Feedback</a></li>
                                            <li><a className="dropdown-item" href="#">Solus Advance</a></li>
                                            <li><a className="dropdown-item" href="#">About</a></li>
                                            <li><a className="dropdown-item" href="#">Newsletter</a></li>
                                            <li><a className="dropdown-item" href="#">Logout</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        
    )
}

export default Header;