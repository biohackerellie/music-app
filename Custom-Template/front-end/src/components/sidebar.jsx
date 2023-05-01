import React from 'react';
import { Link } from 'react-router-dom';

import { FaHome,FaAmazon, FaRecordVinyl, FaSpotify, FaYoutube, FaSoundcloud, FaItunes } from 'react-icons/fa';
import '../index.css'

const spotify = import.meta.env.VITE_SPOTIFY_URL 
const apple = import.meta.env.VITE_APPLE_URL
const amazon = import.meta.env.VITE_AMAZON_URL
const youtube = import.meta.env.VITE_YOUTUBE_URL
const soundcloud = import.meta.env.VITE_SOUNDCLOUD_URL


const Sidebar = () => {
  return(
    <div className=" fixed sm:fixed sm:top-0 sm:left-0 h-30 sm:h-screen w-screen  z-50 sm:w-16  sm:m-0 
    flex flex-row sm:flex-col 
    bg-gray-900 text-white shadow-lg">     
      <SideBarIcon icon={<FaHome size="28" />} text="Home" link="/"  />
      <SideBarIcon icon={<FaSpotify size="28" />} text="Spotify" link={spotify} />
      <SideBarIcon icon={<FaItunes size="28" />} text="Apple Music" link={apple} />
      <SideBarIcon icon={<FaAmazon size="28" />} text="Amazon Music" link={amazon} />
      <SideBarIcon icon={<FaYoutube size="28" />} text="YouTube" link={youtube} />
      <SideBarIcon icon={<FaSoundcloud size="28" />} text="SoundCloud" link={soundcloud} />
    </div>
  )
}

const SideBarIcon = ({ icon, text, link }) => (
  <Link className="sidebar-icon group " to={link}>
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </Link>
);

export default Sidebar;