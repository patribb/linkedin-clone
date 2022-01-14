import { Avatar } from "@mui/material";
import Image from "next/image";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { signOut, useSession } from "next-auth/react";

const Sidebar = () => {
    const { data: session } = useSession();

    return (
        <div className="max-w-lg space-y-2 min-w-max">
        {/* Top */}
        <div className="bg-white dark:bg-[#1D2226] rounded-lg overflow-hidden relative flex flex-col items-center text-center border border-gray-300 dark:border-none">
          <div className="relative w-full h-14">
            <Image src="https://rb.gy/i26zak" layout="fill" priority alt='' />
          </div>
          <Avatar
            onClick={signOut}
            src={session?.user?.image}
            className="!h-14 !w-14 !border-2 !absolute !top-4 !cursor-pointer"
          />
          <div className="mt-5 py-4 space-x-0.5">
            <h4 className="cursor-pointer hover:underline decoration-purple-700 underline-offset-1">
              {session?.user?.name}
            </h4>
            <p className="text-sm text-black/60 dark:text-white/75">
              {session?.user?.email}
            </p>
          </div>
  
          <div className="hidden text-sm text-left md:inline dark:text-white/75">
            <div className="font-medium sidebarButton space-y-0.5">
              <div className="flex justify-between space-x-2">
                <h4>Quién vio tu perfil</h4>
                <span className="text-blue-500">321</span>
              </div>
              <div className="flex justify-between space-x-2">
                <h4>Vistas de tu publicación</h4>
                <span className="text-blue-500">1,892</span>
              </div>
            </div>
  
            <div className="sidebarButton">
              <h4 className="text-xs leading-4">
              Acceda a herramientas y conocimientos exclusivos
              </h4>
              <h4 className="font-medium dark:text-white">
                <span className="inline-block w-3 h-3 mr-1 rounded-sm bg-gradient-to-tr from-yellow-700 to-yellow-200" />{" "}
                Prueba Premium gratis
              </h4>
            </div>
  
            <div className="sidebarButton flex items-center space-x-1.5">
              <BookmarkOutlinedIcon className="!-ml-1" />
              <h4 className="font-medium dark:text-white">Mis items</h4>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="hidden md:flex bg-white dark:bg-[#1D2226] text-black/70 dark:text-white/75 rounded-lg overflow-hidden flex-col space-y-2 pt-2.5 sticky top-20 border border-gray-300 dark:border-none">
          <p className="sidebarLink">Grupos</p>
          <div className="flex items-center justify-between">
            <p className="sidebarLink">Eventos</p>
            <AddRoundedIcon className="!h-5" />
          </div>
          <p className="sidebarLink">Hashtags seguidos</p>
          <div className="text-center sidebarButton">
            <h4 className="text-sm font-medium dark:text-white">Descubrir Más</h4>
          </div>
        </div>
      </div>
    );
}

export default Sidebar
