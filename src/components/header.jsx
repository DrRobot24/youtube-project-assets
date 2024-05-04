import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

export default function Header({ email, logout }) {
  return (
    <header className="h-20 bg-slate-900">
      <div className="flex items-center justify-between h-full container max-w-screen-lg">
        <div className="text-2xl font-extrabold uppercase">
          Project <span className="font-extralight">Assets</span>
        </div>

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarFallback />
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
