// const songList = [
//     { id: '0', src: "/songs/a_beautiful_day.mp3", cover: "", title: "A beautiful day" },
//     { id: '1', src: "/songs/Download - The Landers.mp3", cover: "/images/Download.jpg", title: "Download - The Landers" },
//     { id: '2', src: "/songs/MiAmor.mp3", cover: "/images/Mi amor.jpg", title: "Mi Amor - Sharn" },
//     { id: '3', src: "/songs/Showstopper - Jerry.mp3", cover: "/images/Showstopper.jpg", title: "Showstopper - Jerry" },
//     { id: '4', src: "/songs/Top Flame.mp3", cover: "/images/Top Flame.webp", title: "Top Flame - Jerry" },
// ]

// export default songList;

import React from 'react'

export const songList = [
    { id: '0', src: "/songs/Top Flame.mp3", cover: "/images/Top Flame.webp", title: "Top Flame - Jerry" },
    { id: '1', src: "/songs/Download - The Landers.mp3", cover: "/images/Download.jpg", title: "Download - The Landers" },
    { id: '2', src: "/songs/MiAmor.mp3", cover: "/images/Mi amor.jpg", title: "Mi Amor - Sharn" },
    { id: '3', src: "/songs/Showstopper - Jerry.mp3", cover: "/images/Showstopper.jpg", title: "Showstopper - Jerry" },
    { id: '4', src: "/songs/a_beautiful_day.mp3", cover: "", title: "A beautiful day" },
]

function songLists() {

    return (
        <div>
            {songList.map(song => (
                <div key={song.id}>
                    <p>Title: {song.title}</p>
                </div>
            ))}
        </div>
    )
}

export default songLists