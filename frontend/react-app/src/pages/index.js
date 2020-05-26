import { HomePage } from "./home";
import { CatalogPage } from "./catalog";
import { ProductPage } from "./product";
import { CartPage } from "./cart";
import { ContactPage } from "./contacts";
import { DeliveryPage } from "./delivery";
import { SiteMapPage } from "./sitemap";
import { AboutPage } from "./about";
import { FaqPage } from "./faq";
import { NotFoundPage } from "./not-found";
export const routes = () => [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/catalog/:gender?/:type?/:subtype?/:filters?",
    // exact: true,
    component: CatalogPage,
  },
  {
    path: "/product/:id",
    exact: true,
    component: ProductPage,
  },
  {
    path: "/cart",
    exact: true,
    component: CartPage,
  },
  {
    path: "/contacts",
    exact: true,
    component: ContactPage,
  },
  {
    path: "/delivery",
    exact: true,
    component: DeliveryPage,
  },
  {
    path: "/sitemap",
    exact: true,
    component: SiteMapPage,
  },
  {
    path: "/about",
    exact: true,
    component: AboutPage,
  },
  {
    path: "/faq",
    exact: true,
    component: FaqPage,
  },
  { component: NotFoundPage },
  /*
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
