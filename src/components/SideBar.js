import TerrainIcon from '@mui/icons-material/Terrain';
import Performance from './Performance';

const datas=["Outreaches-h","Impact Overview-h","Lift Drill Down-h","Month Report-h","Conversion Report-h",
"Deep Dive-h","Funnel Report-h","Campaigns","Lift Detail","Day Report","Top Triggers","Monthly Perf",
"Yield/Coverage","Hard Response","Segment Perf."]

function SideBar() {
    return (  
        <div className='flex justify-between p-4 '>
            <div className='flex flex-col '>
                <div className='flex ml-3'>
                    <TerrainIcon />
                    <h1 className='text-[#616161] font-bold ml-4'>Performance</h1>
                </div>

                <div className='flex flex-col'>
                    {datas.map((data,index)=>(
                        <Performance item={data} />
                    ))}
                </div>

                <div className='flex ml-3 mt-2'>
                    <TerrainIcon />
                    <h1 className='text-[#616161] font-bold ml-4'>Cross Instance</h1>
                </div>

            </div>
        </div>
    );
}

export default SideBar;