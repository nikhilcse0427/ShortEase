import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import {DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Header = () => {
  const navigate = useNavigate();
  const user = true;
  return (
    <div>
      <nav className="py-2 flex justify-between items-center">
        <Link to="/">
          <img src="../public/logo.png" className="h-28" alt="logoImg" />
        </Link>
        {!user?(
        <Button onClick={()=>navigate('/auth')}>Login</Button>
       ):(
         <DropdownMenu>
         <DropdownMenuTrigger>
         <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
         </Avatar>
         </DropdownMenuTrigger>
         <DropdownMenuContent>
         <DropdownMenuLabel>Nikhil Verma</DropdownMenuLabel>
         <DropdownMenuSeparator />
         <DropdownMenuItem>My Links</DropdownMenuItem>
         <DropdownMenuItem>Logout</DropdownMenuItem>
         </DropdownMenuContent>
         </DropdownMenu>)
}


      </nav>
    </div>
  )
}

export default Header
