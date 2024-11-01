 import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link } from "react-router-dom"
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { Pie, PieChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter
} from "@/components/ui/table"


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

 const partofdashboard=[
  {
    title:"Inventory",
    path:"/sign-in/dash-board/inventory"
  },
  {
    title:"Sales",
    path:"/sign-in/dash-board/sales"
  },
  {
    title:"Overview",
    path:"/sign-in/dash-board/overview"
  },
  {
    title:"Analysis",
    path:"/sign-in/dash-board/analysis"
  }
 ]

 const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

 const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartData1 = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
}

const chartConfig1 = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} 

  return (
    (<SidebarProvider className="">
      {/* <AppSide bar /> */}
      <Sidebar>
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
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
<br />
      <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
        <SidebarMenu>
      {partofdashboard.map((item) => (
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

      </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
      <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
      </SidebarFooter>
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
                    Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            {/* date */}


          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-4">
            <div
              className="aspect-video rounded-xl bg-neutral-100/50 dark:bg-neutral-800/50 p-6">
                <p className="text-xl md:text-2xl lg:text-xl font-bold">
  Gross Sales
</p>
<p className="text-xl md:text-xl lg:text-4xl font-bold">
  20,000$
</p>
<p className="font-custom text-s font-bold text-gray-400">
+20.1% from last month
</p>
                </div>
            <div
              className="aspect-video rounded-xl bg-neutral-100/50 dark:bg-neutral-800/50 p-4" >
                <p className="text-xl md:text-2xl lg:text-xl font-bold">
  Avarage sales
</p>
<p className="text-xl md:text-xl lg:text-4xl font-bold">
  50,000$
</p>
<p className="font-custom text-s font-bold text-gray-400">
+29.7% from last month
</p>
                </div>
            <div
              className="aspect-video rounded-xl bg-neutral-100/50 dark:bg-neutral-800/50 p-4" >
                <p className="text-xl md:text-2xl lg:text-xl font-bold">
  New sales (Today and yesterday)
</p>
<p className="text-xl md:text-xl lg:text-4xl font-bold">
  956$
</p>
                </div>
                <div
              className="aspect-video rounded-xl bg-neutral-100/50 dark:bg-neutral-800/50 p-4" >
                <p className="text-xl md:text-2xl lg:text-xl font-bold">
  Gross Profit
</p>
<p className="text-xl md:text-xl lg:text-4xl font-bold">
  15,000$
</p>
<p className="font-custom text-s font-bold text-gray-400">
+25.1% from last month
</p>
                </div>
          </div>

          <Tabs defaultValue="Graph" >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Graph">Graph</TabsTrigger>
        <TabsTrigger value="Table">Table</TabsTrigger>
      </TabsList>


      <TabsContent value="Graph">
          {/* this is the part one start */}
          <div className="grid auto-rows-min gap-4 md:grid-cols-2">
            <div
              className="aspect-video rounded-xl bg-neutral-100/50 dark:bg-neutral-800/50 ">
                 <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
                </div>
            <div
              className="aspect-video rounded-xl bg-neutral-100/50 dark:bg-neutral-800/50 " >
                <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Label</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig1}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData1} dataKey="visitors" label nameKey="browser" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
                </div>
          </div>

          </TabsContent>

          <ScrollArea className="h-128 md:h-128 lg:h-128">
          <TabsContent value="Table">
          
          <div className=" flex-1 rounded-xl bg-neutral-100/50 md:min-h-min dark:bg-neutral-800/50 p-4" >
          <p className="font-custom text-2xl font-bold text-gray-800">Product (Based on sale)</p>
          <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
             <Separator className="my-2" />
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
              </div>
              
              </TabsContent>
              </ScrollArea>
              </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>)
  );
}
