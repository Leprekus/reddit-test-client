import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import '../App.css'
export default function Root () {
    // <li>reddit logo</li> maybe staying
    // <li>home button</li> staying 
    // <li>search bar</li> staying 
    // <li>popular</li> this takes to a new homepage. It can better be displayed as a carousel || staying
    // <li>happening now</li> reddit live talks || removing
    // <li>chat</li> chat *not pm* || removing
    // <li>notifications</li> staying
    // <li>create post</li> removing
    // <li>advertise</li> removing
    // <li>shop avatars</li> removing
    // <li>profile pic</li> staying
    const [isDisplayed, setIsDisplayed] = useState('none')
    const dropdownRef = useRef()
    useEffect(() => {
        function handleClickOutside({ target }) {
            if(dropdownRef.current && !dropdownRef.current.contains(target)) {
                setIsDisplayed('none')
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [dropdownRef])
    const active = {
        backgroundColor: 'red',
    }
    const notActive = {
        backgroundColor: 'black',
    }

    const showDropdown = () => {
        setIsDisplayed('block')
     
    }
    
    return (
        <>
            <nav>
                <NavLink className='button' to='' style={({ isActive }) => isActive ? active : notActive }>reddit logo</NavLink>
                <NavLink className='button' to='/samplePath' style={({ isActive }) => isActive ? active : notActive }>home button</NavLink>
                
                <NavLink ref={dropdownRef} className='dropdown button' onClick={showDropdown} style={({ isActive }) => isActive ? active : notActive }>search bar
                    <div class="dropdown-content" style={{display: isDisplayed}}>
                        <p>Hello World!</p>
                    </div>
                </NavLink>

                <NavLink className='button' to='/samplePath' style={({ isActive }) => isActive ? active : notActive }>popular</NavLink>
                <NavLink className='button' to='/samplePath' style={({ isActive }) => isActive ? active : notActive }>notifications</NavLink>
                <NavLink className='button' to='/samplePath' style={({ isActive }) => isActive ? active : notActive }>profile pic</NavLink>
            </nav>
        </>
    )
}