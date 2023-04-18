import React, { useContext } from "react";
import { Songs } from "../Context";

export default function DetailSong() {
    const { song } = useContext(Songs);
    return (
        <div className="col-span-1 p-3 flex flex-col">
            <h2 className="text-cyan-500 font-bold text-center">Now playing</h2>
            <h2 className="text-neutral-400 text-2xl text-center">
                {song.name}
            </h2>
            <div className="w-[240px] m-auto mt-10">
                <img
                    className="w-full"
                    src={song.links.images[0].url}
                    alt="avatar"
                />
            </div>
            <div className="flex flex-col justify-evenly items-center mt-10">
                <h2 className="text-cyan-500 font-bold text-center">
                    Next song
                </h2>
                <div className="flex items-center w-[200px] justify-between pt-7">
                    <img
                        className="w-[70px] rounded-full"
                        src={song.links.images[1].url}
                        alt="avatar"
                    />
                    <span className="text-xl text-white">{song.author}</span>
                </div>
            </div>
        </div>
    );
}
