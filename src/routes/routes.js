import React, { lazy } from 'react';
// Common
const NotFound = React.lazy(() => import('../pages/not-found'));
const ForbiddenAccess = React.lazy(() => import('../pages/forbidden-access'));

// User onboarding
const Login = React.lazy(() => import('../pages/user/login'));
const ForgotPassword = React.lazy(() => import('../pages/user/forgot-password'));
const ChangePassword = React.lazy(() => import('../pages/user/change-password'));
const MyProfile = React.lazy(() => import('../pages/user/my-profile'));
const EditProfile = React.lazy(() => import('../pages/user/edit-profile'));
const Dashboard = React.lazy(() => import('../pages/dashboard'));
const Registration = React.lazy(() => import('../pages/user/registration'));

const Home = React.lazy(()=>import('../pages/home')) 
const ServiceDetails = React.lazy(()=>import('../pages/aboutus')) 
const Services = React.lazy(()=>import("../pages/services"))
const Relocation = React.lazy(()=>import("../pages/relocation"))
const Client = React.lazy(()=>import("../pages/clients"))
const Page = React.lazy(()=>import("../pages/page"))
const Contactus  = React.lazy(()=>import("../pages/contactus"))
const ReviewRating  = React.lazy(()=>import("../pages/review/index"))

// Documentation


const Invoice  = React.lazy(()=>import("../pages/document/invoice"))
const Lrlayout = React.lazy(()=>import("../pages/document/Lr"))
const MoneyReceipt = React.lazy(()=>import("../pages/document/moneyReceipt"))
const ListLayout = React.lazy(()=>import("../pages/document/packingList"))
const Quotation = React.lazy(()=>import("../pages/document/quotation"))
const ConsignerDetails = React.lazy(()=>import("../pages/consignerSection/ConsignerDetails"))
const packagesData = React.lazy(()=>import('../pages/document/packagesData'))
// Home
const configureRoutes = () => {
  const routes = [
    {
      component: Home,
      exact: true,
      path: '/',
      title: 'Track Consignment',
      type: 'public',
      userValidate: false
    },
    {
      component: Login,
      exact: true,
      path: '/login',
      title: 'Login',
      type: 'public',
      userValidate: false
    },
    {
      component: ConsignerDetails,
      exact: true,
      path: '/ConsignerDetails',
      title: 'ConsignerDetails',
      type: 'private',
      userValidate: false
    },
    {
      accessible: [],
      component: Dashboard,
      exact: true,
      path: '/dashboard',
      title: 'Dashboard',
      type: 'private',
      userValidate: false
    },
    {
      accessible: [],
      component: Services,
      exact: true,
      path: '/about-us',
      title: 'About Us',
      type: 'public',
      userValidate: false
    },
    {
      accessible: [],
      component: Contactus,
      exact: true,
      path: '/contact_us',
      title: 'Contact Us',
      type: 'public',
      userValidate: false
    },
    {
      accessible: [],
      component: Page,
      exact: true,
      path: '/pages',
      title: 'Page',
      type: 'public',
      userValidate: false
    },
    {
      accessible: [],
      component: Client,
      exact: true,
      path: '/tracking',
      title: 'Tracking Consignmnet',
      type: 'public',
      userValidate: false
    },
    {
      accessible: [],
      component: ReviewRating,
      exact: true,
      path: '/review',
      title: 'Review & Rating',
      type: 'public',
      userValidate: false
    },
    {
      accessible: [],
      component:Relocation,
      exact: true,
      path: '/contact-us',
      title: 'Get a Quote',
      type: 'public',
      userValidate: false
    },
    {
      accessible: [],
      component: ServiceDetails,
      exact: true,
      path: '/services/:page_name',
      title: 'Services',
      type: 'public',
      userValidate: false
    },
    {
      accessible: [],
      component: Page,
      exact: true,
      path: '/content/:page_name',
      title: 'Services',
      type: 'public',
      userValidate: false
    },
    {
      accessible: [],
      component: Home,
      exact: true,
      path: '/home',
      title: 'Home',
      type: 'public',
      userValidate: false
    },

    // General routes
    // /moneyreceipt/:document_id /listLayout/:document_id /invoice/:document_id  /Lrlayout/:document_id
    {
      accessible: [],
      component: MoneyReceipt,
      exact: true,
      path: '/moneyreceipt/:document_id',
      title: 'moneyReceipt',
      type: 'public',
      userValidate: false
    },
    {
      accessible: [],
      component: ListLayout,
      exact: true,
      path: '/listLayout/:document_id',
      title: 'ListLayout',
      type: 'public',
      userValidate: false
    },
    {
      accessible: [],
      component: Invoice,
      exact: true,
      path: '/invoice/:document_id',
      title: 'Invoice',
      type: 'public',
      userValidate: false
    },
    {
      accessible: [],
      component: Lrlayout,
      exact: true,
      path: '/Lrlayout/:document_id',
      title: 'Lr',
      type: 'public',
      userValidate: false
    },
    {
      accessible: [],
      component: Quotation,
      exact: true,
      path: '/Quotation/:document_id',
      title: 'Lr',
      type: 'public',
      userValidate: false
    },
    {
      accessible:[],
      component:packagesData,
      exact:true,
      path:"/packagesData",
      title:"PacageList",
      type:"public",
      userValidate:false
    },
    // General routes
    {
      component: ForbiddenAccess,
      exact: true,
      path: '/forbidden-access',
      title: '403 Forbidden Access',
      type: 'error',
      userValidate: false
    },
    {
      component: NotFound,
      exact: true,
      path: '*',
      title: '404 Not Found',
      type: 'error',
      userValidate: false
    },
  ];

  return routes;
};

export default configureRoutes;
