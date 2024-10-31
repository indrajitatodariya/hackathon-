import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar"
// import { title } from "process"

import { Link } from "react-router-dom"

export default function Page() {
 const partalogin=[
  {
    title:"Dashboard",
    path:"/sign-in/dash-board"
  },
  {
    title:"Market place",
    path:"/sign-in/market-place"
  },
  {
    title:"Contect us",
    path:"/sign-in/contect-us"
  }
 ]

  return (
    (<SidebarProvider className="">
      {/* <AppSidebar /> */}
      <Sidebar>
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <SidebarGroup/>
        <SidebarGroupLabel>Sections</SidebarGroupLabel>
        <SidebarMenu>
      {partalogin.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path}>
                      {/* <item.icon /> */}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
      </SidebarMenu>
      </SidebarContent>
      
      <SidebarFooter />jfkls
    </Sidebar>

      <SidebarInset>
        <header
          className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div
              className="aspect-video rounded-xl bg-neutral-100/50 dark:bg-neutral-800/50" />
            <div
              className="aspect-video rounded-xl bg-neutral-100/50 dark:bg-neutral-800/50" />
            <div
              className="aspect-video rounded-xl bg-neutral-100/50 dark:bg-neutral-800/50" />
          </div>
          <div
            className="min-h-[100vh] flex-1 rounded-xl bg-neutral-100/50 md:min-h-min dark:bg-neutral-800/50" />
        </div>
      </SidebarInset>
    </SidebarProvider>)
  );
}
