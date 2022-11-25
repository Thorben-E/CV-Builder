import React, { useEffect, useState } from "react"

const PlayScreen = ({ changePlay, changeEnd, imageList }) => {
    const [selectorActive, setSelectorActive] = useState(false)
    let start = Date.now()
    const calculateTime = () => {
        let millis = Date.now() - start
        return Math.floor(millis / 1000)
    }
    const [timer, setTimer] = useState(Date.now()) 
    const mapClick = (e) => {
        setSelectorActive(true)
        let x = e.pageX
        let y = e.pageY
        const selector = document.getElementById('selector')
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
    useEffect(() => {
        const timer = setTimeout(() => {
            document.getElementById('0').remove()
            start = Date.now()
        }, 100);
        document.getElementById('1').addEventListener('click', (e) => console.log(e))
        return () => clearTimeout(timer)
    }, []);
    
    return (
    <div className="PlayScreen">
        <nav>
            <button onClick={changeScreen}>remove play</button>
            <button onClick={() => console.log(calculateTime())}>log time</button>
            <div>circles</div>
            <div>{timer}</div>
        </nav>
        <main>
            {imageList.map((url,i) => {
                return <img onClick={(e) => mapClick(e)} id={i} key={i} src={url} />
            })}
            {selectorActive && <div className="selector" id="selector">
                <div className="selectorcell" onClick={() => selectorClick('waldo')}>Waldo</div>
                <div className="selectorcell" onClick={() => selectorClick('snaldo')}>Snaldo</div>
                <div className="selectorcell" onClick={() => selectorClick('haldo')}>Haldo</div>
            </div>}
        </main>
    </div>
  )
};

export default PlayScreen;
