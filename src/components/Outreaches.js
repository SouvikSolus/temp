import DownloadIcon from '@mui/icons-material/Download';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import axios from 'axios';
import {connect} from "react-redux"


function Outreaches({state,stateChange}) {
    
    const data={"username":"solusdev@solus.ai","password":"solus@1231"}


    const helper=(tkn,city)=>{
        
        let body = JSON.stringify({
            "CITY":city==="NA"?-1:city,
        });

        axios.post('https://cartbeui.solus.ai/api/solus/ui/dashboard_graph_display',body,{
            headers: {
                "Content-Type": "application/json",
                "cache-control": "no-cache",
                "x-access-token":tkn
              },
        })
            .then(response => {
                console.log("got the data through api")
                console.log("resp**",response.data); // Handle the response data

                console.log("[<->]",typeof JSON.parse(response.data))

                stateChange(JSON.parse(response.data))
            })
            .catch(error => {
                console.error(error); // Handle any errors
            });
    }

   
    const handleChange=(e)=>{
        // console.log("-->",e.target.value)
        axios.post('https://cartbeui.solus.ai/api/auth/signin', data,{
            headers: {
                "Content-Type": "application/json",
                "cache-control": "no-cache",
              },
        })
            .then(response => {
                helper(response.data.accessToken,e.target.value)
                console.log("signed it")
                console.log(response.data.accessToken); // Handle the response data
            })
            .catch(error => {
                console.error(error); // Handle any errors
            });
    }

    return ( 
        <div className="mt-4 bg-white py-2 rounded-lg ">
            <div className='flex justify-center'>
                <p className='font-semibold'>Outreaches: Outreach Report</p>
            </div>
            <div className='flex justify-between  w-full mt-6'>
                <select className="form-select  w-80 ">
                    <option className='font-semibold'>Select Segment</option>
                </select>

                <select className="form-select w-80" onChange={(e)=>handleChange(e)}>
                    <option className='font-semibold'>Select Rev.Centre</option>
                    <option className='font-semibold' name="Bangaluru">Bangaluru</option>
                    <option className='font-semibold' name="Chennai">Chennai</option>
                    <option className='font-semibold' name="Hyderabad">Hyderabad</option>
                    <option className='font-semibold' name="NA">NA</option>              
                </select>

                <div className='flex items-center '>
                    <DownloadIcon style={{color:"00B0F0",width:"20px",height:"20px"}} className='mr-4 items-center'/>
                    <SettingsIcon style={{color:"00B0F0",width:"20px",height:"20px"}} className='mr-4 items-center'/>

                    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div className="btn-group me-2" role="group" aria-label="First group">
                            <button type="button" className="btn bg-[#0A4E9B] text-white px-6">#</button>
                            <button type="button" className="btn bg-[#59CBF4] text-white px-6">%</button>
                        </div>
                        <div className="btn-group" role="group" aria-label="Second group">
                            <button type="button" className="btn bg-[#00B0F0] text-white px-6">D</button>
                            <button type="button" className="btn bg-[#00B0F0] text-white px-6">W</button>
                            <button type="button" className="btn bg-[#0A4E9B] text-white px-6">M</button>
                            <button type="button" className="btn bg-[#00B0F0] text-white px-6">Q</button>
                            <button type="button" className="btn bg-[#E2E2E2] text-[#676767] px-6">Y</button>
                        </div>
                    </div>

                    <KeyboardDoubleArrowDownIcon />
                </div>
            </div>
        </div>
     );
}


const mapStateToProps=(state)=>{
    return {
        data:state.data.data
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        stateChange:(datas)=>dispatch({type:"FILL_DATA",payload:datas})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Outreaches);