import { useEffect, useState } from 'react';
import songList from './components/songList';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import ListIcon from '@mui/icons-material/List';
import CloseIcon from '@mui/icons-material/Close';

function Home() {

  // const songList = [
  //   { id: '0', src: "/songs/a_beautiful_day.mp3", cover: "", title: "A beautiful day" },
  //   { id: '1', src: "/songs/Download - The Landers.mp3", cover: "/images/Download.jpg", title: "Download - The Landers" },
  //   { id: '2', src: "/songs/MiAmor.mp3", cover: "/images/Mi amor.jpg", title: "Mi Amor - Sharn" },
  //   { id: '3', src: "/songs/Showstopper - Jerry.mp3", cover: "/images/Showstopper.jpg", title: "Showstopper - Jerry" },
  //   { id: '4', src: "/songs/Top Flame.mp3", cover: "/images/Top Flame.webp", title: "Top Flame - Jerry" },
  // ];

  const [showMenu, setShowMenu] = useState(false);
  const [currentSong, setCurrentSong] = useState(songList[0].src);
  const [currentSongSource, setCurrentSongSource] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState('0');
  const [volume, setVolume] = useState(8);
  const [currentSongTitle, setCurrentSongTitle] = useState('A beautiful day');
  const [currentSongIndex, setCurrentSongIndex] = useState('0');
  const [currentSongDuration, setCurrentSongDuration] = useState('00:00');
  const [isMute, setIsMute] = useState(false);

  const changeVolume = (e) => {
    let audioElement = document.getElementById('audioElement');
    audioElement.volume = e.target.value / 100;
    setVolume(e.target.value);
  }

  const onMasterPlay = (song, index, isPlaying) => {
    let audioElement = document.getElementById('audioElement');
    if (!isPlaying) {
      audioElement.src = song;
      audioElement.volume = volume / 100;
      setCurrentSongSource(song);
      setCurrentSongIndex(index);
      // audioElement.currentTime = progress;
      audioElement.play();
    }
    else {
      setCurrentSongSource('');
      audioElement.pause();
    }
    setIsPlaying(!isPlaying);
  }

  const onPlay = async (index) => {
    setCurrentSong(songList[index].src);
    setCurrentSongSource(songList[index].src);
    setCurrentSongIndex(index);
    const newSong = songList[index].src;
    if (currentSongTitle !== songList[index].title) {
      setCurrentSongTitle(songList[index].title);
    }

    await new Promise(resolve => {
      setTimeout(resolve, 0); // Wait for current event loop to complete
    });
    onMasterPlay(newSong, index, false);
  }

  const onPause = (index) => {
    setCurrentSongSource('');
    setIsPlaying(false);

    let audioElement = document.getElementById('audioElement');

    audioElement.pause();
  }

  const handleProgressChange = (event) => {
    const newValue = event.target.value;
    const audioElement = document.getElementById('audioElement');
    const duration = audioElement.duration;
    const newTime = (newValue / 100) * duration;
    audioElement.currentTime = newTime;
    setProgress(newValue);
  }

  useEffect(() => {
    let audioElement = document.getElementById('audioElement');

    const updateProgress = () => {
      const duration = audioElement.duration;
      const currentTime = audioElement.currentTime;
      const calculatedProgress = (currentTime / duration) * 100;
      setProgress(calculatedProgress);
    }

    audioElement.addEventListener('timeupdate', updateProgress);
  }, [progress])

  const previousSong = () => {
    let index = currentSongIndex;
    index--;
    if (index < 0) {
      onPlay('0');
    }
    else {
      onPlay(index);
    }
  }

  const nextSong = () => {
    let index = currentSongIndex;
    index++;
    if (index >= songList.length) {
      onPlay('0');
    }
    else {
      onPlay(index);
    }
  }

  const changeToMute = () => {
    let audioElement = document.getElementById('audioElement');
    if (isMute) {
      setIsMute(false);
      audioElement.volume = volume / 100;
    }
    else {
      setIsMute(true);
      audioElement.volume = 0;
    }
  }


  return (
    <>
      <div className='bg-black'>
        <div className='flex justify-between h-[100vh] relative'>
          <div className='block md:hidden p-2 cursor-pointer absolute' onClick={()=>setShowMenu(true)}>
            <ListIcon />
          </div>
          <div className='w-[25%] border-r-[1px] rounded-t-xl hidden md:block'>
            <div className='text-center p-1 bg-white text-black font-bold rounded-t-xl text-[15px] md:text-[20px]'>Songs List</div>
            <div className='space-y-3 py-1 md:py-3 lg:py-5'>
              {songList?.map((song, index) => (
                <div key={index} className='pb-1 md:px-1 lg:px-2'>
                  <div className='flex items-center justify-between py-2'>
                    <div className='flex items-center space-x-3 max-w-[88%]'>
                      <img src={song.cover} alt="" className='w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] rounded-full border-2' />
                      <div className='text-[10px] lg:text-sm'>{song.title}</div>
                    </div>

                    <div className='lg:border-2 rounded-full cursor-pointer' >
                      {currentSongSource !== song.src ? <PlayArrowIcon onClick={() => onPlay(index)} className='text-[15px] md:text-[20px] lg:text-[25px]' /> : <PauseIcon onClick={() => onPause(index)} className='text-[15px] md:text-[20px] lg:text-[25px]' />}
                    </div>
                  </div>

                  <hr />
                </div>
              ))}
            </div>
          </div>

          {showMenu &&
            <div className='w-full h-[100vh] bg-black absolute z-[10]'>
              <div className='text-center p-1 bg-white text-black font-bold rounded-t-xl text-[15px] md:text-[20px] flex justify-between px-5'>Songs List <span className='cursor-pointer' onClick={()=>setShowMenu(false)}><CloseIcon/></span></div>
              <div className='space-y-3 py-1 px-5'>
                {songList?.map((song, index) => (
                  <div key={index} className='pb-1 md:px-1 lg:px-2'>
                    <div className='flex items-center justify-between py-2'>
                      <div className='flex items-center space-x-3 max-w-[88%]'>
                        <img src={song.cover} alt="" className='w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] rounded-full border-2' />
                        <div className='text-[10px] lg:text-sm'>{song.title}</div>
                      </div>

                      <div className='lg:border-2 rounded-full cursor-pointer' >
                        {currentSongSource !== song.src ? <PlayArrowIcon onClick={() => { onPlay(index);  setShowMenu(false)}} className='text-[15px] md:text-[20px] lg:text-[25px]' /> : <PauseIcon onClick={() => onPause(index)} className='text-[15px] md:text-[20px] lg:text-[25px]' />}
                      </div>
                    </div>

                    <hr />
                  </div>
                ))}
              </div>
            </div>
          }

          <div className={`w-[100%] md:w-[75%] h-[80vh] ${isPlaying && 'bg-[url(/images/playing.gif)]'} bg-cover`}>
            <div className='flex flex-col items-center justify-center h-full space-y-10 bg-black bg-opacity-80'>
              <img src={songList[currentSongIndex].cover} alt="" className='w-[45%] lg:w-[25%] border-2 h-[40%]' />
              <div className='text-[13px]'>{songList[currentSongIndex].title}</div>
            </div>
          </div>
        </div>

        <div className='fixed bottom-0 px-5 py-3 flex flex-col items-center justify-center space-y-3 w-full border-t-[1px] bg-black'>
          <audio src={currentSong} id="audioElement"></audio>
          <div className='text-[13px] text-start w-full flex items-center space-x-3'>
            {isPlaying && <img src="images/playing.gif" alt="" className='w-[50px]' />}
            <div>{currentSongTitle}</div>
          </div>

          <div className='w-full'>
            <input type="range" value={progress} min="0" max="100" className='w-full cursor-pointer h-1 bg-gray-200 rounded-lg appearance-none dark:bg-gray-500' onChange={handleProgressChange} />
          </div>

          <div className='w-[100%] flex items-center justify-between'>
            <div className='text-[13px] w-[25%] sm:w-[30%]'>
              00:00 / {currentSongDuration}
            </div>

            <div className='space-x-1 sm:space-x-10 w-[25%] sm:w-[30%] text-center'>
              <SkipPreviousIcon style={{ cursor: 'pointer' }} className='text-[20px] md:text-[33px]' onClick={previousSong} />
              {!isPlaying ? <PlayArrowIcon style={{ cursor: 'pointer' }} className='text-[20px] md:text-[33px]' onClick={() => onMasterPlay(currentSong, currentSongIndex, isPlaying)} /> : <PauseIcon style={{ cursor: 'pointer' }} className='text-[20px] md:text-[33px]' onClick={() => onMasterPlay(currentSong, currentSongIndex, isPlaying)} />}
              <SkipNextIcon style={{ cursor: 'pointer' }} className='text-[20px] md:text-[33px]' onClick={nextSong} />
            </div>

            <div className='flex items-center justify-end space-x-1 sm:space-x-3 text-[10px] sm:text-[12px] w-[25%] sm:w-[30%] font-bold'>
              <div className='flex items-center justify-end sm:w-[15%] space-x-1 sm:space-x-2'>{isMute ? <VolumeOffIcon style={{ cursor: 'pointer' }} className="text-[20px] md:text-[25px]" onClick={changeToMute} /> : <VolumeUpIcon style={{ cursor: 'pointer' }} className="text-[20px] md:text-[25px]" onClick={changeToMute} />} <div className='w-[40%]'>{volume}%</div></div>
              <input type="range" value={volume} min="0" max="100" className='cursor-pointer h-1 w-[60%] sm:w-[30%] bg-gray-200 rounded-lg appearance-none dark:bg-gray-400' onChange={(e) => changeVolume(e)} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home