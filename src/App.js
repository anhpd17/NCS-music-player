import "./App.css";
import DetailSong from "./components/DetailSong";
import ListSong from "./components/ListSong";
import NavBar from "./components/NavBar";
import DataSongs from "./data/songs.json";
import { Songs } from "./Context";
import { useState } from "react";
import Playing from "./components/Playing";

function App() {
    const [song, setSong] = useState(DataSongs[0]);
    const handleSetSong = (idSong) => {
        const song = DataSongs.find((song) => song.id === idSong);
        if (!song) {
            setSong(DataSongs[0]);
        } else {
            setSong(song);
        }
    };
    return (
        <div className="App">
            <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
                <NavBar />
                <div className="grid grid-cols-3 bg-slate-700 h-[calc(100vh - 6rem - 6rem)] overflow-hidden">
                    {/* span 1 */}
                    <DetailSong />
                    {/* span 2 */}
                    <ListSong />
                </div>
                <Playing />
            </Songs.Provider>
        </div>
    );
}

export default App;
