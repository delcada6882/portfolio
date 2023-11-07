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

import avatar from "./img/Screenshot 2023-04-25 at 6.08.58 PM.png";

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
      "I wanted to start specialize in character creation within Blender. I finished the sculpt sometime in 2022, but decided to update it with a custom built NPR shader I made after watching Across the Spider-Verse.",
      "2023",
      "",
      "General Bust",
    ],
    [
      toddMerch,
      "After watching Demon Slayer, I thought about putting some of my best friend's art into 3D spaces and experimenting with lighting. This became the first of three art pieces I've done trying to attempt this 2D image in 3D look.",
      "2022",
      "twice",
      "A Merchant in the Snow",
    ],
    [
      chessImg,
      "During a camp-out a friend and I were playing chess on a table like this near the fire when he told me he wanted to make a chess game in Unity. When I got home I got started immediately working on models and sent him this piece. The game got cancelled, but I'll always have this memory to look back on.",
      "2020",
      "twice",
      "Chess by the Fire",
    ],
    [
      sculptAnime,
      "Furthering my journey into character creation, I decided to sculpt this character I found on DeviantArt by <a href='https://www.deviantart.com/atachi00/gallery' target=`_blank`>atachi00</a>. <br> You can find the reference sheet <a href='https://www.deviantart.com/atachi00/art/Character-Model-Sheet-716578884' target=`_blank`>here</a>",
      "2023",
      "twice",
      "Goth Girl Sculpt",
    ],

    [
      drawingTest01,
      "This is the second in my collection of trying to put 2D illustrations in 3D space. I'm really happy with the end result on this one specifically just because I think it maximizes the power of both mediums quite well. I found this sketch on google on a website teaching forced perspective.",
      "2023",
      "twice",
      "Magic in the Night",
    ],
    [
      adamOff,
      "My friends and I started discussing creating a review channel together, and I decided that if I was going to start a review channel then I would need a 3D avatar to represent myself. My first attempt was a horrid low poly 8-bit texture nightmare, but my second attempt lead to this so I can't really complain.",
      "2023",
      "vert",
      "Adam's First Official Render",
    ],
    [
      drawingTest02,
      "After the success of my second in this collection, I thought I'd try to do it again with a 3 hour time limit. I feel it could've turned out better, but I'm still really happy with the end result.",
      "2023",
      "twice",
      "He Visits in the Night",
    ],
    [
      ooo,
      "I had the idea for a masked salesman in a hoodie from one of my dreams then had to do it justice in 3D art. This is another piece I feel would turn out better if I gave it more time, but for a rough demo scene I feel it serves its purpose.",
      "2023",
      "",
      "Oni Mask Salesman",
    ],

    [
      adamInBar,
      "After finishing the 3D avatar of me, I decided to make him a little set in which he would share all of his thoughts. I'm still below the age of 21, so I've never been in a bar but I've always loved the aesthetics of one. Plus, it fit with the brown color scheme I was going for.",
      "2023",
      "twice",
      "Floating Through Space",
    ],
    [
      link,
      "I wanted to test out that shader applied to 'General Bust' on a model that lends itself better for something like that. So I grabbed this model of Link (from Legend of Zelda BOTW) from sketchfab and recolored every texture top fit my favorite color palette from lospec and put him in a water world.",
      "2023",
      "twice",
      "How's he Getting Out of this One?",
    ],
    [
      build,
      "I saw an Ian Hubert tutorial on how easy it was to make buildings off of images and decided to give it a shot.",
      "2021",
      "",
      "New York Building",
    ],
    [
      pigeon,
      "I wanted to experiment more with non photo-realistic renders after the render of Link was finished, so I made a model of a pigeon head then messed with robot eyes and glare effects.",
      "2023",
      "twice",
      "It's Alive!",
    ],
    [
      freddySpec,
      "This model of Freddy was made by Spinofan, Elscamon, TheBoofster, YinyangGio1987. <br>After getting a little obsessed with my little shader, I decided to make special renders of Freddy Fazbear from FNaF 1. ",
      "2023",
      "",
      "NPR Freddy",
    ],
    [
      bonnieSpec,
      "This model of Bonnie was made by Spinofan, Elscamon, TheBoofster, YinyangGio1987. <br>After I finished the render of Freddy, I realized that I couldn't call it quits until I finished Bonnie.",
      "2023",
      "",
      "NPR Bonnie",
    ],
    [
      chicaSpec,
      "This model of Chica was made by Spinofan, Elscamon, TheBoofster, YinyangGio1987. <br>I decided to make Chica and Bonnie almost mirror each other in their images to reflect their roles in the game on your right door and left door respectively.",
      "2023",
      "",
      "NPR Chica",
    ],
    [
      foxySpec,
      "This model of Foxy was made by Spinofan, Elscamon, TheBoofster, YinyangGio1987. <br>Due to Foxy having his own separate area, I decided to give him different lighting and make his render darker.",
      "2023",
      "",
      "NPR Foxy",
    ],
    [
      goldFreddySpec,
      "This model of Golden Freddy was made by Spinofan, Elscamon, TheBoofster, YinyangGio1987. <br>When I finished the render of Foxy, it took me a couple months to realize that I still had to do Golden Freddy.",
      "2023",
      "",
      "NPR Yellow Bear",
    ],

    [
      funFreddyPaint,
      "This model of Funtime Freddy was made by jorjimodels, GamesProduction, ItzMattq, HFO-yt, PatrykPL24. <br>I decided to keep this trend of rendering characters from this game franchise with non photo-realistic effects going after finishing the FNaF 1 collection. Creating the painterly-like effect was quite easy due to the amount of people who have tried to do so. This one was done procedurely, but I still felt it was lacking the human intuition and touch in so I decided to do a different method after this collection.",
      "2023",
      "",
      "Can't Wait to Meet You",
    ],
    [
      babyPaint,
      "This model of Circus Baby was made by jorjimodels, GamesProduction, ItzMattq, HFO-yt, PatrykPL24. <br>It was getting close to Halloween when I made this render and the next so I tried to up the creep factor.",
      "2023",
      "",
      "So Join the Animatronic Family",
    ],
    [
      funFoxPaint,
      "This model of Funtime Foxy was made by jorjimodels, GamesProduction, ItzMattq, HFO-yt, PatrykPL24. <br>I saw a tutorial on mapping blood onto your pre-textured models years ago and it never really left my mind. So I decided to try it out for this render I made on Halloween.",
      "2023",
      "",
      "We Open Real Soon",
    ],

    [
      albumCover,
      "I wrote a song called ACI and have had this very specific image in my mind for an album cover for years. Only in June did I realize that I have improved enough as an artist to make it.",
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
      "After watching Ian Huberts tutorial on easy warbling in 3D, I decided to make this sign.",
      "2020",
      "twice",
      "Take it Slow",
    ],
    [
      j9,
      "I made this model for a Star Wars roleplay a group of friends and I were gonna do. I box modelled everything in 2020 and used a render of this character with photo based materials as my character profile. I decided to go and try that painterly look on him with custom made normal maps to recreate the artist's stroke in 3D. Beyond that I also added some dots and lines as you see in Spider-Verse because I was and still am obsessed with the art for that movie.",
      "2023",
      "",
      "J9",
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
        <h1>Portfolio</h1>
        <div id="cardHolder">
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
        {/* <div id="about">
          <h1>About</h1>
          <div className="left">
            <img src={avatar} alt="image of Adam Del Castillo-Call" />
          </div>
          <div className="right">
            <p>My name is</p>
            <h2>Adam Del Castillo-Call</h2>
          </div>
          <p>
            I've been using blender since 2017. It started with Blender Guru's
            2.78{" "}
            <a
              href="https://youtu.be/JYj6e-72RDs?si=q67-ITTHi62_7Zfa"
              target="_blank"
            >
              donut tutorial
            </a>
          </p>
        </div> */}
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
