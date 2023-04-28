import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { HiChartPie, HiViewBoards, HiInbox, HiUser, HiShoppingBag, HiArrowSmRight, HiTable, HiOutlineHome, HiHome } from 'react-icons/hi';
import { BiBuoy } from 'react-icons/bi';
import { FaFire, FaHome,FaAmazon, FaRecordVinyl, FaSpotify, FaYoutube, FaSoundcloud, FaItunes } from 'react-icons/fa';
import '../index.css'

const Sidebar = () => {
  return(
    <div className="fixed top-0 left-0 h-screen z-50 w-16 m-0
    flex flex-col 
    bg-gray-900 text-white shadow-lg">
      
      <SideBarIcon icon={<FaHome size="28" />} text="Home" link="/"  />
      <SideBarIcon icon={<FaRecordVinyl size="28" />} text="Album - Songs in My Head" link="/album/Songs in My Head" />
      <SideBarIcon icon={<FaSpotify size="28" />} text="Spotify" link="https://open.spotify.com/artist/0csjx5EnVlhizAs1mwMwrW?si=e2f8G0_nRL2pd1vM7tqQhQ" />
      <SideBarIcon icon={<FaItunes size="28" />} text="Apple Music" link="https://music.apple.com/us/artist/ellie-kerns/1572324391" />
      <SideBarIcon icon={<FaAmazon size="28" />} text="Amazon Music" link="https://music.amazon.com/artists/B0977FBDC1/ellie-kerns" />
      <SideBarIcon icon={<FaYoutube size="28" />} text="YouTube" link="https://www.youtube.com/channel/UCVrCmyRUGf9KQZ7r6R8_ZeQ" />
      <SideBarIcon icon={<FaSoundcloud size="28" />} text="SoundCloud" link="https://soundcloud.com/elliekerns" />
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