import React from 'react';
import ForYouThumbnails from'../components/ForYouThumbnails';

function ForYou(){
    var data = [];
    return(
        <div className="relative flex flex-col space-y-2 my-10 px-8 max-w-[1800px] mx-auto">
            <h2 className="text-3xl font-semibold text-[#040714]">For You</h2>
            <div className="flex flex-wrap justify-between">
            {
                data.map((data)=>{
                    return <ForYouThumbnails key={data.id} result={result} />
                })
                
            }
            </div>
        </div>
    );
}
export default ForYou;