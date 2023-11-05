import "./App.scss";
import {
  Button,
  // CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import FollowMouse from "./components/followMouse/followMouse";
import Header from "./components/header/Header";

import sculpt01 from "./img/Sculpt.png";
import chessImg from "./img/Chess Night V2.png";
import toddMerch from "./img/Todd Is Merchant.png";
import sculptAnime from "./img/01 v2 combines.png";
import ooo from "./img/Ooo.png";

import drawingTest01 from "./img/01 v3.png";
import drawingTest02 from "./img/02 V2.png";

import funFreddyPaint from "./img/Funtime Freddy Painterly - C V3 Large.png";
import babyPaint from "./img/Baby Painterly - C L2 Large V2.51.png";
import funFoxPaint from "./img/Funtime Foxy Painterly - C L3 Large V3.png";

import freddySpec from "./img/Freddy SpecialShader.png";
import bonnieSpec from "./img/Bonnie Adam Shader V3.png";
import chicaSpec from "./img/Chica Adam Shader.png";
import foxySpec from "./img/Foxy Adam Shader.png";
import goldFreddySpec from "./img/Golden Freddy Adam Shader.png";

import albumCover from "./img/Cover.png";
import hiloCover from "./img/HILO V.2.png";

import donutHa from "./img/Donut Haha.png";

import adamOff from "./img/First OFFICIAL Render (2).png";
import adamInBar from "./img/Adam Final Bar.png";

import pigeon from "./img/PigeonGore.png";
import link from "./img/New shader Idea .png";

import build from "./img/Hmmm. Buildings V.1.png";
import roadSign from "./img/Road Sign ACES.jpg";
import j9 from "./img/J9 v2.png";

import { useState } from "react";

// import Compress from "react-image-file-resizer";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);

  const portfolioArr = [
    [
      sculpt01,
      "Started trying to get better with sculpting in Blender.",
      "2023",
      "",
      "Bust 01",
    ],
    [
      toddMerch,
      "My first attempt into putting 2D drawings into 3D space.",
      "2022",
      "twice",
      "A Merchant in the Snow",
    ],
    [
      chessImg,
      "Developed for a cancelled game my best friend and I were making.",
      "2020",
      "twice",
      "Chess by the Fire",
    ],
    [
      sculptAnime,
      "I wanted to up my anatomy game.",
      "2023",
      "twice",
      "Full body 01",
    ],

    [
      drawingTest01,
      "I wanted to make a review channel, so I designed a 3D caricature of me and a little set for him. I just watched Across the ",
      "2023",
      "twice",
      "She's Scary",
    ],
    [
      adamOff,
      "Before I put Adam in space, I did a few test renders and landed on this as the first official render for him.",
      "2023",
      "vert",
      "Adam's First Official Render",
    ],
    [
      drawingTest02,
      "My third attempt into putting 2D drawings into 3D space.",
      "2023",
      "twice",
      "He Visits in the Night",
    ],
    [
      ooo,
      "After finishing the NPR FNaF 1 collection, thought I'd get try another NPR effect with another FNaF game.",
      "2023",
      "",
      "So Join the Animatronic Family",
    ],

    [
      adamInBar,
      "I wanted to make a review channel, so I designed a 3D caricature of me and a little set for him. I just watched Across the ",
      "2023",
      "twice",
      "Floating Through Space",
    ],
    [
      link,
      "I wanted to make a review channel, so I designed a 3D caricature of me and a little set for him. I just watched Across the ",
      "2023",
      "twice",
      "Floating Through Space",
    ],
    [
      build,
      "I wanted to make a review channel, so I designed a 3D caricature of me and a little set for him. I just watched Across the ",
      "2023",
      "",
      "Floating Through Space",
    ],
    [
      pigeon,
      "I wanted to make a review channel, so I designed a 3D caricature of me and a little set for him. I just watched Across the ",
      "2023",
      "twice",
      "Floating Through Space",
    ],
    [
      freddySpec,
      "After watching Across the Spider-Verse, I wanted to experiment more with NPR type effects. Model not made by me.",
      "2023",
      "",
      "NPR Freddy",
    ],
    [
      bonnieSpec,
      "Thought I'd continue the set after finishing Freddy.",
      "2023",
      "",
      "NPR Bonnie",
    ],
    [
      chicaSpec,
      "Thought I'd continue the set after finishing Freddy.",
      "2023",
      "",
      "NPR Chica",
    ],
    [
      foxySpec,
      "Thought I'd continue the set after finishing Freddy.",
      "2023",
      "",
      "NPR Foxy",
    ],
    [
      goldFreddySpec,
      "Thought I'd continue the set after finishing Freddy.",
      "2023",
      "",
      "NPR Yellow Bear",
    ],

    [
      funFreddyPaint,
      "After finishing the NPR FNaF 1 collection, thought I'd get try another NPR effect with another FNaF game.",
      "2023",
      "",
      "So Join the Animatronic Family",
    ],
    [
      babyPaint,
      "After finishing the NPR FNaF 1 collection, thought I'd get try another NPR effect with another FNaF game.",
      "2023",
      "",
      "So Join the Animatronic Family",
    ],
    [
      funFoxPaint,
      "Decided to make Funtime Foxy much more creepy.",
      "2023",
      "",
      "We Open Real Soon",
    ],

    [
      albumCover,
      "I wrote a song and wanted a very specific album cover.",
      "2023",
      "",
      "ACI Album cover",
    ],
    [
      hiloCover,
      "Album art created by Jack Stauber. <br>When I saw that album cover, I knew that I wanted to see what it would look like in physical space",
      "2022",
      "",
      "HiLo Album Cover",
    ],

    [
      donutHa,
      "Based on Blender Guru's donut tutorial for Blender 2.8.",
      "2020",
      "twice",
      "Basement Table",
    ],
    [
      roadSign,
      "I wanted to make a review channel, so I designed a 3D caricature of me and a little set for him. I just watched Across the ",
      "2023",
      "twice",
      "Floating Through Space",
    ],
    [
      j9,
      "I wanted to make a review channel, so I designed a 3D caricature of me and a little set for him. I just watched Across the ",
      "2023",
      "",
      "Floating Through Space",
    ],
  ];

  function handleClickOpen(title: string, desc: string) {
    setTitle(title);
    setDescription(desc);
    setOpen(true);
    // setModalImage(image);
  }

  function handleClose() {
    setOpen(false);
  }
  return (
    <>
      <Header />

      <div id="background-pattern"></div>

      <div className="content">
        <div className="cardHolder">
          {portfolioArr.map((item, index) => {
            return (
              <div
                key={index}
                className={`card ${item[3]}`}
                onClick={() => {
                  // setLoading(true);
                  const tempDescription = `
            <div class="modalImageHolder">
              <img src="${item[0]}" alt="${item[4]}" class="${item[3]}" />
            </div>
            <p>${item[1]}</p>
            <p>Completed in ${item[2]}.</p>
            `;
                  handleClickOpen(item[4], tempDescription);
                }}
              >
                <div className="imageHolder">
                  <img src={item[0]} alt={item[4]} />
                </div>
                <div className="cardContent">
                  <p>{item[4]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <FollowMouse />
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth={"md"}
          fullWidth
          id="modal"
        >
          <DialogTitle id="modalTitle">{title}</DialogTitle>
          <DialogContent>
            <div
              id="modalText"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          </DialogContent>
          <DialogActions>
            <Button id="modalClose" onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default App;
