import { Compass, Layout,List,BarChart,TrendingUp,Bell, User, CheckSquare, PenSquare, PackageCheck, AlertCircle, AlertTriangle, Settings, BarChart4 } from "lucide-react";

export const routes = [
    {
       icon: Layout,
       label:"Dashboard",
       href:"/main"
    },
    {
        icon: TrendingUp,
        label:"Config appareils",
        href:"/device-config"
    },
    {
        icon: Bell,
        label:"Alerts - Notifications",
        href:"/alerts"
    },
    {
        icon: User,
        label:"Users",
        href:"/user"
    },
    // {
    //     icon: CheckSquare,
    //     label:"Roles & Permissions",
    //     href:"/roles"
    // },
    // {
    //     icon: PenSquare,
    //     label:"User Activity Tracing",
    //     href:"/user-activity"
    // },
    {
        icon: PackageCheck,
        label:"config seuils",
        href:"/threshold-config"
    },
    // {
    //     icon: BarChart,
    //     label:"Hierarchy ",
    //     href:"/hierarchy"
    // },
    // {
    //     icon: AlertTriangle,
    //     label:"Alert Configuration ",
    //     href:"/alert-configuration"
    // },
    // {
    //     icon: Settings,
    //     label:"Device Profile ",
    //     href:"/device-profile"
    // },
    {
        icon: BarChart4,
        label:"Statistiques",
        href:"/statistics"
    }
  
];
