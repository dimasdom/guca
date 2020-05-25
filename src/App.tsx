import React from 'react';
import './App.css';
import styled from 'styled-components'
import GucaPic from './guca.jpg'
import shareIcon from './share.svg'
import heart from './heart.svg'
import apple from './brand.svg'
import soundcloud from './soundcloud.svg'
interface MainDivType {
    height: number
    width: number
}

let MainDiv = styled.div`
height:${(props: MainDivType) => props.height}px;
width:${(props: MainDivType) => props.width}px;
background-image:url('https://scontent-msp1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/90057045_667023500770245_3457592620263616017_n.jpg?_nc_ht=scontent-msp1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=mueEKuQLXPgAX_7PI3f&oh=a22a05d38bf01864d582d055a17eab36&oe=5EF5966A&dl=1');
background-size:cover;
background-position:center;`;

function App() {
    return (
        <MainDiv height={window.innerHeight +30} width={window.innerWidth +30}>
            <h1 className="text-center border-bottom p-3 Guca text-white">GuCa</h1>
            <div className="container plotcontainer text-white overflow-hidden">
                <div className="row flex">
                    <div className="col mt-5">
                        <h1 className={"Unclvlad"}>Uncl_Vlados</h1>
                        <p className={"UnclvladDescription"}>Vladislav Guca perspective rapper.Has amazing music.It's a man from modern generation . He told us our future</p>
                        <span>Share  <img className={"shareic"} src={shareIcon}/></span> <span>Like  <img className={"shareic"} src={heart}/></span>
                        <br/>
                        <button className={"mb-1 ml-1 mr-1 mt-2 soundcloud p-1"}>Listen on SoundCloud <img className={"lisicon"} src={soundcloud}/></button>
                        <br/>
                        <button className={"m-1 applemusic p-1"}>Listen on Apple Music <img className={"lisicon"} src={apple}/></button>
                    </div>
                    <div className="col mt-5">
                        <div className="row Info">
                            <div className="col"><p>Real name: <br/>Vladislav Guca</p></div>
                            <div className="col"><p>Genres:<br/>Trash Rap Huyna</p></div>
                        </div>
                        <div>
                            <p>Featured Albums</p>
                            <a><img className="img-fluid rounded shadow plotkosyakimgalbm" src={GucaPic}/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row border-top mt-auto text-white ">
                <div className="col-2 mt-3 ml-5"><img className="img-fluid plotkosyakimg rounded" src={GucaPic}/></div>
                <div className="col-9"><figure>
                    <figcaption className="ml-5">Plotniy Kosyak</figcaption>
                    <audio className="audio ml-5 mt-1" controls autoPlay>
                            <source src=" https://docs.google.com/uc?export=download&id=1ckc07l3DwwTo6qmFleKMPOiWlXBhgMM9" type="audio/mpeg"/>
                    </audio>
                </figure></div>
            </div>
        </MainDiv>
    );
}

export default App;
