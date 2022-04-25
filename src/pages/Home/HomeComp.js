import React, { useState } from "react";
import { useFetchApi } from "../../services/fetchApi";


const HomeComp = () => {

    const [breedName, setBreedName] = useState("affenpinscher");
    const [minNumber, setminNumber] = useState("");


    const { data } = useFetchApi("breeds/list");
    const {data:isData, isFetching:isLoading} = useFetchApi(`breed/${breedName}/images`);
    const {data:allData, isFetching} = useFetchApi(`breed/${breedName}/images/random/${minNumber}`);

    let number = [];
    for(let i =1; i<=10;i++) number.push(i);

    const handleNumber = (e) =>{
        setminNumber(e.target.value)
    };

    return(
        <div className="max-w-[90%] md:mx-auto mx-10">
            <div className="md:flex md:justify-between space-y-6 items-center flex-wrap mt-24 md:mt-52">
                <div className="md:flex space-y-6 md:space-y-0 md:space-x-6">
                    <select defaultValue={breedName} onChange={(e) => setBreedName(e.target.value)} className="border border-black w-full md:w-40 py-3 px-1 outline-none">
                        {data?.message?.map(breedList => (
                            <option>{breedList}</option>
                        ))}
                    </select>
                    <select defaultValue={number} onChange={handleNumber} className="border border-black w-full md:w-40 py-3 px-1 outline-none">
                    <option>Display Number</option>
                        {number.map(number=>(
                            <option key={number} id={number} value={number}>{number}</option>
                        ))}
                    </select>
                    {/* <select className="border border-black w-full md:w-40 py-3 px-1 outline-none">
                        <option>Breed</option>
                    </select> */}
                </div>
                <div>
                    <button className="bg-black text-white w-full px-4 py-3">Randomize Breed Image Display</button>
                </div>
            </div>
            <div className="mt-14">
                <h1 className="md:text-5xl text-3xl capitalize">{breedName} Breeds</h1>
                <div className="mt-6 flex flex-wrap">
                    {!minNumber ? (isLoading?"Loading...":
                    isData?.message?.map(breedImg => (
                        <div className="mt-8 md:mr-8">
                            <img className="w-200px md:w-350px h-400px md:h-456px" src={breedImg} alt="dog_image" />
                        </div> 
                    ))
                    ):(isFetching ? <div className="text-center flex justify-center">Loading...</div> : allData?.message?.map((breedImg, index) => (
                        <div className="mt-8 md:mr-8">
                            <img className="w-full md:w-350px h-400px md:h-456px" src={breedImg} alt="dog_image" />
                        </div>
                    )))}
                </div>
            </div>
        </div>
    )
}

export default HomeComp;