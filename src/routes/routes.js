import MenuContainer from "../containers/MenuContainer";
import Home from "../views/Home";
import endpoints from "./endpoints";

const routes = [
  {
    path: endpoints.home,
    component: MenuContainer,
    routes: [
      {
        component: Home,
        path: endpoints.home,
      },
    ],
  },
];

export default routes;
