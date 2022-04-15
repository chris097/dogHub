import React from "react";
import dogImg from "../../public/images/dog.png";


const HomeComp = () => {
    return(
        <div className="max-w-7xl md:mx-auto mx-10">
            <div className="md:flex md:justify-between space-y-6 items-center flex-wrap mt-24 md:mt-52">
                <div className="md:flex space-y-6 md:space-x-6 flex-wrap">
                    <select className="border w-full md:w-40 py-3 px-1 outline-none">
                        <option>Breed</option>
                    </select>
                    <select className="border w-full md:w-40 py-3 px-1 outline-none">
                        <option>Breed</option>
                    </select>
                    <select className="border w-full md:w-40 py-3 px-1 outline-none">
                        <option>Breed</option>
                    </select>
                </div>
                <div>
                    <button className="bg-black text-white w-full px-4 py-3">Randomize Breed Image Display</button>
                </div>
            </div>
            <div className="mt-14">
                <h1 className="md:text-5xl text-3xl">Hound Breed</h1>
                <div className="mt-6 flex space-y-7 md:space-y-0 md:space-x-7 flex-wrap">
                    <div className="w-350px md:h-456px">
                        <img src={dogImg} alt="dog_image" />
                    </div>
                    <div className="w-350px md:h-456px">
                        <img src={dogImg} alt="dog_image" />
                    </div>
                    <div className="w-350px md:h-456px">
                        <img src={dogImg} alt="dog_image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComp;