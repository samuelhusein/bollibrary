import React from 'react';
import RecomendedThumbnails from '../components/RecomendedThumbnails';

function Recomended(){
    var data=[];
    return(
        <div className="relative flex flex-col space-y-2 my-10 px-8 max-w-[1800px] mx-auto">
            <h2 className="text-3xl font-semibold text-[#040714]">Recomended this week</h2>
            <div className="flex flex-wrap justify-between">
            {
                data.map((data)=>{
                    return <RecomendedThumbnails key={data.id} result={data} />
                })
                
            }
            </div>
        </div>
    );
}
export default Recomended;