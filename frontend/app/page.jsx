
"use client";

import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { MusicCard } from "@/components/music-card";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        {/* Sidebar fixa à esquerda */}
        <AppSidebar />

        {/* Conteúdo principal */}
        <div className="flex flex-col flex-1">

          {/* Trigger opcional no topo */}
          <div className="p-4 border-b">
            <SidebarTrigger />
          </div>

          {/* Conteúdo da página */}
          <main className="flex flex-wrap p-4 gap-4">
             <MusicCard/>
             <MusicCard/>
             <MusicCard/>
             <MusicCard/>
             <MusicCard/>
             <MusicCard/>
             <MusicCard/>
             <MusicCard/>

            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
    
    
  );
}


