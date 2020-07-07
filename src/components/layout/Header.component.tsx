import React,{FC, useState} from 'react';
import Button from '@material-ui/core/Button';
import Dashboard from "../dashboard/Index.component";

interface Props{
    username:string
}
const Header:FC <Props>= (props:Props) =>{
    const menus = [
        
            {id:"home",type:"Home"},
            {id:"about",type:"About"},
            {id:"services",type:"Services"},
    
    ]
    
    const [menuItems, setMenuItems]= useState(menus);  //using React hooks
    const [counter, setCounter] = useState(0);
    const changeMenu = () =>{
        setMenuItems([
            {id:"portfolio",type:"Portfolio"},
            {id:"careers",type:"Carrers"},
            {id:"contact",type:"Contacts"},
        ])
        setCounter(counter+1);
    }

    return(
    <div>
       <header className="header">
           <div  className="logo">Logo</div>
           <div className="menu">
               <ul className="menu-items">
                   {menuItems.map((menu,i)=>(
                       <li className="item" key={i}>
                           {menu.type}
                       </li>
                   ))}
               </ul>
           </div>
           <Button variant="contained" color="primary" onClick={changeMenu}>
      Change State
    </Button>
    {counter}
    
       </header>
       <Dashboard/>
    </div>
)
}

export default Header;

