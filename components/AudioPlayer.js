import { useRef, useEffect } from 'react';

function AudioPlayer() {
    const audioRef = useRef(null);

    useEffect(() => {
        const audioElement = audioRef.current;
        audioElement.addEventListener('ended', () => {
            // Reset the audio
            audioElement.currentTime = 0;
        });
    }, []);

    const handleClick = () => {
        const audioElement = audioRef.current;
        audioElement.play();
    };

    return (
        <div>
            <button onClick={handleClick}>Play Audio</button>
            <audio ref={audioRef}>
                <source src="/correctOption.wav" type="audio/wav" />
            </audio>
        </div>
    );
}

export default AudioPlayer;
