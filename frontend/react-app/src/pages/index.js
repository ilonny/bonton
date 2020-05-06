import { HomePage } from "./home";
export const routes = () => [
    {
        path: "/",
        exact: true,
        component: HomePage,
    },
    /*
    {
      path: "/join",
      exact: true,
      component: JoinLoginPage,
    },
    {
      path: "/join/registration",
      exact: true,
      component: JoinRegistrationPage,
    },
    {
      path: "/new/card",
      exact: true,
      component: CardCreatePage,
    },
    {
      // https://github.com/howtocards/preview-worker#api
      path: "/open/:cardId",
      exact: true,
      component: CardViewPage,
    },
    {
      path: "/edit/:cardId",
      exact: true,
      component: CardEditPage,
    },
    {
      path: "/logout",
      exact: true,
      component: LogoutPage,
    },
    {
      path: "/search",
      exact: true,
      component: SearchPage,
    },
    {
      path: "/settings",
      exact: true,
      component: SettingsPage,
    },
    {
      path: "/@:username",
      exact: true,
      component: UserPage,
    },
  
    { component: NotFoundPage },
    */
];