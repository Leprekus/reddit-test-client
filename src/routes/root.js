import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
    loginAvatarIcon,
    notificationsIcon,
    trendingIcon
} from '../assets/assets'

import '../App.css'
import { Dropdown } from "../components/Dropdown";
export default function Root () {
    // <li>reddit logo</li>  staying
    // <li>home button</li> removing 
    // <li>search bar</li> staying 
    // <li>popular</li> this takes to a new homepage. It can better be displayed as a carousel || staying
    // <li>happening now</li> reddit live talks || removing
    // <li>chat</li> chat *not pm* || removing
    // <li>notifications</li> staying
    // <li>create post</li> removing
    // <li>advertise</li> removing
    // <li>shop avatars</li> removing
    // <li>profile pic</li> staying
    const [searchTerm, setSearchTerm] = useState('')
    const [isDisplayed, setIsDisplayed] = useState('none')
    const [displaySearchbar, setDisplaySearchbar] = useState('none')
    const dropdownRef = useRef()
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [dropdownRef])
    const active = {
        textDecoration: 'underline',
        transition: 'ease-in',
        color: '#FFF'
    }
    const notActive = {
        color: '#cacaca'
    }

    const showDropdown = () => {
        setIsDisplayed('block')
        if(window.innerWidth < 720) {
            setDisplaySearchbar('block')
        }
    }
    const handleClickOutside = ({ target }) => {
        if(dropdownRef.current && !dropdownRef.current.contains(target)) {
            setIsDisplayed('none')
            if(window.innerWidth < 720) setDisplaySearchbar('none')
        }
    }

    const handleSearchTerm = ({ target }) => {
        setSearchTerm(target.value)
    }
    
    return (
        <>
            <nav>
  
                <NavLink title="Home Page" className='button' to='' style={({ isActive }) => isActive ? active : notActive }><img className='icon' src='https://seeklogo.com/images/R/reddit-logo-23F13F6A6A-seeklogo.com.png' alt='reddit logo'/></NavLink>
                <NavLink title="Search" ref={dropdownRef} className='dropdown button' onClick={showDropdown} style={({ isActive }) => isActive ? active : notActive }>
                <form className="searchbar-container">
                    <label for="searchbar header">
                        <svg focusable="false" className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                    </label>
                    <input className="searchbar" onChange={handleSearchTerm} style={{display: 'block'}} placeholder='Search Subreddits' value={searchTerm}/>
                </form>
                <Dropdown isDisplayed={isDisplayed} searchTerm={searchTerm}/>
                </NavLink>

                <NavLink title="Popular" className='button' to='/samplePath' style={({ isActive }) => isActive ? active : notActive }><img className="icon" src={trendingIcon} alt='popular'/></NavLink>
                <NavLink title="Notifications" className='button' to='/samplePath' style={({ isActive }) => isActive ? active : notActive }><img className='icon' src={notificationsIcon} alt='notifications'/></NavLink>
                <NavLink title="Profile" className='button' to='/samplePath' style={({ isActive }) => isActive ? active : notActive }><img className='icon' src={loginAvatarIcon} alt='login avatar'/></NavLink>
            </nav>
        </>
    )
}