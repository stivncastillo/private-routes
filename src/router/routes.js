import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";

const routes = {
  private: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardPage
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfilePage
    }
  ],
  public: [
    {
      path: "/",
      name: "login",
      component: LoginPage
    }
  ]
}

export default routes
