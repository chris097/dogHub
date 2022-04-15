import React from "react";
import dogImg from "../../public/images/dog.png";


const HomeComp = () => {
    return(
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mt-52">
                <div className="flex space-x-6">
                    <select className="border w-40 py-3 px-1 outline-none">
                        <option>Breed</option>
                    </select>
                    <select className="border w-40 py-3 px-1 outline-none">
                        <option>Breed</option>
                    </select>
                    <select className="border w-40 py-3 px-1 outline-none">
                        <option>Breed</option>
                    </select>
                </div>
                <div>
                    <button className="bg-black text-white px-4 py-3">Randomize Breed Image Display</button>
                </div>
            </div>
            <div className="mt-14">
                <h1 className="text-5xl">Hound Breed</h1>
                <div className="mt-6">
                    <div className="w-350px h-456px">
                        <img src={dogImg} alt="dog_image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComp;