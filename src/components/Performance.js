

function Performance({item}) {
    return (
        <div>
            {item.includes("-h")?(
                <div >
                    {(item.split("-h")[0]==="Outreaches")?(
                        <div>
                            <p className="bg-cyan-50 flex text-xl  px-1 py-[5px] text-[#00B0F0] font-bold">- {item.split("-h")[0]}</p>
                        </div>
                    ):(
                        <div>
                            <p className="bg-[#EAF8FE] flex px-1 py-[5px]">- {item.split("-h")[0]}</p>
                        </div>
                    )}

                    <hr />
                </div>
            ):(
               <div> 
                    <p className=" px-1 py-[5px]">- {item}</p>
                    <hr />
            </div>
            )}

        </div>
      );
}

export default Performance;