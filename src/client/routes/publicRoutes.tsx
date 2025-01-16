import loadable from "@loadable/component";

const Homepage = loadable(() => import("../pages/Homepage/HomePage"), { ssr: true });
const GoogleAds = loadable(() => import("../pages/GoogleAds/GoogleAds"), { ssr: true });
const Blogs = loadable(() => import("../pages/Blogs/Blogs"), { ssr: true });
const BlogDetails = loadable(() => import("../pages/BlogDetails/BlogDetailsPage"), { ssr: true });

const PublicLayout = loadable(() => import("../layouts/public/PublicLayout"), { ssr: true });

const Services = loadable(() => import("../pages/Services/Services"), { ssr: true });



import { TextContentRoutes } from "./contentRoutes/contentRoutes";
import { RouteType } from "./types";
import { CartInfoItemCookie } from "../data/constants";



const clearNotification = () => {
  console.log("Notifications cleared!");
};

const publicRoutes: RouteType[] = [
  {
    path: "",
    layout: PublicLayout,
    component: Homepage,
  },
  

  {
    path: "/react-web-development",
    layout: PublicLayout,
    component: Services,
  },

  {
    path: "/google-ads",
    layout: PublicLayout,
    component: GoogleAds,
  },
  {
    path: "/blogs",
    layout: PublicLayout,
    component: Blogs,
  },
  {
    path: "/blogs/:blogId", 
    layout: PublicLayout,
    component: BlogDetails,
  },
 

  ...TextContentRoutes,
];

export default publicRoutes;
