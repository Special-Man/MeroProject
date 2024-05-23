import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import ViTable from "../components/ViTable";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Faq= () => {
    return(
        <div>
        <h2>Movies:-</h2>
        {/* <h3>FAQ fullform is Fast and Qurious I decided..</h3> */}

{/* THis is for: 1 */}
<div class="boxy">
    <div class="center">
    <div>
      <img className="posters" src="../cover.jpg"></img>
      </div>
    <div>
      
      <p class="solid"> <strong>Name:</strong> TerraForge Chronicles: Nexus Dawn</p>
       <p class="solid"><strong>Genre:</strong> Action, Thriller</p>
        <p class="solid"><strong>Medium:</strong> Movie</p>
         <Link to="/Movie">
         <button class="accordion" >Watch Now!</button></Link>
        </div>
    </div>
    </div>

  {/* THis is for: 1.5 */}
  <div class="boxy">
    <div class="center">
    <div>
      <img className="posters" src="../cover4.jpg"></img>
      </div>
    <div><p class="solid"> <strong>Name:</strong> The Lost Temple 2: Anthrolopogia</p>
        <p class="solid"><strong>Genre:</strong> Action, Thriller</p>
        <p class="solid"><strong>Medium:</strong> Movie</p>
         <Link to="/Movie">
         <button class="accordion" >Watch Now!</button></Link>
        </div>
    </div>
    </div>

    {/* THis is for: 2 */}
    <div class="boxy">
    <div class="center">
    <div>
    <img className="posters" src="../gxk.png"></img>

      </div>
    <div><p class="solid"> <strong>Name:</strong> Godzilla x Kong: The New Empire</p>
        <p class="solid"><strong>Genre:</strong> Action, Entertainment</p>
        <p class="solid"><strong>Medium:</strong> Movie</p>
        <Link to="/Movie">
         <button class="accordion" >Watch Now!</button></Link>
        </div>
    </div>
    </div>

  {/* THis is for: 3 */}
  <div class="boxy">
    <div class="center">
    <div>
    <img className="posters" src="../dune2.jpg"></img>

      </div>
    <div><p class="solid"> <strong>Name:</strong> Dune: Part Two</p>
        <p class="solid"><strong>Genre:</strong> Action, Thriller</p>
        <p class="solid"><strong>Medium:</strong>Movie</p>
        <Link to="/Movie">
         <button class="accordion" >Watch Now!</button></Link>
        </div>
    </div>
    </div>
{/* _________________________________________________2ND_LINE_________________________________________________________________________ */}
    {/* THis is for: 1 */}
    <div class="boxy">
    <div class="center">
    <div>
      <img className="posters" src="../batman.jpg"></img>
      </div>
    <div>
      
      <p class="solid"> <strong>Name:</strong> The Batman</p>
       <p class="solid"><strong>Genre:</strong> Action, Thriller</p>
        <p class="solid"><strong>Medium:</strong> Movie</p>
         <Link to="/Movie">
         <button class="accordion" >Watch Now!</button></Link>
        </div>
    </div>
    </div>

     {/* THis is for: 2 */}
     <div class="boxy">
    <div class="center">
    <div>
    <img className="posters" src="../superman.png"></img>
      </div>
    <div><p class="solid"> <strong>Name:</strong> Superman</p>
        <p class="solid"><strong>Genre:</strong> Action, Entertainment</p>
        <p class="solid"><strong>Medium:</strong> Movie</p>
        <Link to="/Movie">
         <button class="accordion" >Watch Now!</button></Link>
        </div>
    </div>
    </div>

  {/* THis is for: 1.5 */}
  <div class="boxy">
    <div class="center">
    <div>
      <img className="posters" src="../cover2.jpg"></img>
      </div>
    <div><p class="solid"> <strong>Name:</strong> The Man from Oblivexia</p>
        <p class="solid"><strong>Genre:</strong> Drama, Suspense</p>
        <p class="solid"><strong>Medium:</strong> Movie</p>
         <Link to="/Movie">
         <button class="accordion" >Watch Now!</button></Link>
        </div>
    </div>
    </div>

    

    {/* THis is for: 3 */}
    <div class="boxy">
    <div class="center">
    <div>
    <img className="posters" src="../ScarletSpider.jpg"></img>
      </div>
    <div><p class="solid"> <strong>Name:</strong> Scarlet-Spider: Part Two</p>
        <p class="solid"><strong>Genre:</strong> Action, Suspense</p>
        <p class="solid"><strong>Medium:</strong>Movie</p>
        <Link to="/Movie">
         <button class="accordion" >Watch Now!</button></Link>
        </div>
    </div>
    </div>

        {/* YEs! */}
        </div>

    );
};

export default Faq;