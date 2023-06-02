import DownloadIcon from '@mui/icons-material/Download';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';


function Outreaches() {
    return ( 
        <div className="mt-4 bg-white py-2 rounded-lg ">
            <div className='flex justify-center'>
                <p className='font-semibold'>Outreaches: Outreach Report</p>
            </div>
            <div className='flex justify-between  w-full mt-6'>
                <select className="form-select  w-80 ">
                    <option className='font-semibold'>Select Segment</option>
                </select>

                <select className="form-select w-80">
                    <option className='font-semibold'>Select Rev.Centre</option>
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

export default Outreaches;