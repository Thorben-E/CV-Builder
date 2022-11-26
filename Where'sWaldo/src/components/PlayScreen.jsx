import React, { useEffect, useState } from "react"

const PlayScreen = ({ changePlay, changeEnd, imageList }) => {
    const [selectorActive, setSelectorActive] = useState(false)
    const [time, setTime] = useState(Date.now());
    const [waldo, setWaldo] = useState(true)
    const [frank, setFrank] = useState(true)
    const [bella, setBella] = useState(true)
    const start = Date.now()
    useEffect(() => {
        const interval = setInterval(() => setTime(Math.floor((Date.now()-start) / 1000)), 1000);
        return () => {
          clearInterval(interval);
        };
    }, []);
    const mapClick = (e) => {
        setSelectorActive(true)
        changeSelectorPosition(e)
    }
    const changeSelectorPosition = (e) => {
        console.log(imageList)
        let x = e.pageX
        let y = e.pageY
        const selector = document.getElementById('selector')
        selector.style.position = 'absolute'
        selector.style.left = x+'px';
        selector.style.top = y+'px';
        selector.style.opacity = 100;
    }
    const changeScreen = () => {
        changePlay(false)
        changeEnd(true)
    }
    const selectorClick = (caracter) => {

    }
    
    return (
    <div className="PlayScreen">
        <nav>
            <button onClick={changeScreen}>remove play</button>
            <div>
                <img className="character" src={imageList[1]} />
                <img className="character" src={imageList[2]} />
                <img className="character" src={imageList[0]} />
            </div>
            <div>{time} sec</div>
        </nav>
        <main>
        <img onClick={(e) => mapClick(e)} src={imageList[7]} />
        <div className="selector" id="selector">
            <div className="selectorcell" onClick={() => selectorClick('waldo')}>Waldo</div>
            <div className="selectorcell" onClick={() => selectorClick('snaldo')}>Snaldo</div>
            <div className="selectorcell" onClick={() => selectorClick('haldo')}>Haldo</div>
        </div>
        </main>
    </div>
  )
};

export default PlayScreen;
