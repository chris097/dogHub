import React from "react";
import dogImg from "../../public/images/dog.png";
import { useFetchApi } from "../../services/fetchApi";


const HomeComp = () => {
    const { data } = useFetchApi("breeds/list");
    const {data:isData} = useFetchApi("breed/australian/images")
    const breed = data?.message;
    console.log(isData?.message)
    return(
        <div className="max-w-7xl md:mx-auto mx-10">
            <div className="md:flex md:justify-between space-y-6 items-center flex-wrap mt-24 md:mt-52">
                <div className="md:flex space-y-6 md:space-y-0 md:space-x-6">
                    <select className="border border-black w-full md:w-40 py-3 px-1 outline-none">
                        <option>Breeds</option>
                        {breed?.map(name => (
                            <option>{name}</option>
                        ))}
                    </select>
                    <select className="border border-black w-full md:w-40 py-3 px-1 outline-none">
                        <option>Breed</option>
                    </select>
                    <select className="border border-black w-full md:w-40 py-3 px-1 outline-none">
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
                    <div className="w-350px md:h-456px space-y-6">
                        {isData?.message?.map(msg => (
                            <img className="h-400 md:h-456px object-fit bg-cover bg-no-repeat" src={msg} alt="dog_image" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComp;