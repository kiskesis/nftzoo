import React from 'react'
import './global.css'
import {initContract} from "./utils/utils";
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import SelectAnimalPage from "./pages/selectAnimalPage";
import Mint from "./pages/mint";
import Login from "./pages/login";
import GamePage from "./pages/gamePage";

window.nearInitPromise = initContract()
  .then(() => {
    render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/select-animal" element={<SelectAnimalPage />} />
                <Route path="/mint" element={<Mint />} />
                <Route path="/game/lion" element={<GamePage />} />
            </Routes>
        </BrowserRouter>,
      document.querySelector('#root')
    )
  })
  .catch(console.error)
