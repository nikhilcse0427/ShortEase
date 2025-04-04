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
import { Link2, LogOut } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const user = true;
  return (
    <div>
      <nav className="py-2 flex justify-between items-center">
        <Link to="/">
          <img src="../public/logo.png" className="h-42" alt="logoImg" />
        </Link>
        {!user?(
        <Button onClick={()=>navigate('/auth')}>Login</Button>
       ):(
         <DropdownMenu>
         <DropdownMenuTrigger>
         <Avatar>
          <AvatarImage className="w-16 h-16" src="https://github.com/shadcn.png" />
          {/* <AvatarFallback className="text-white font-bold w-16 h-16">CN</AvatarFallback> */}
         </Avatar>
         </DropdownMenuTrigger>
         <DropdownMenuContent>
         <DropdownMenuLabel>Nikhil Verma</DropdownMenuLabel>
         <DropdownMenuSeparator />
         <DropdownMenuItem className="text-blue-600">
          <Link2 className="mr-2 h-4 w-4" />
          <span>My Links</span>
          </DropdownMenuItem>
         <DropdownMenuItem className="text-red-800">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
          </DropdownMenuItem>
         </DropdownMenuContent>
         </DropdownMenu>)
}


      </nav>
    </div>
  )
}

export default Header
