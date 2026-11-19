import { Outlet } from "react-router";
import { Header } from "../components/Header";
import NavBar from "../components/NavBar";
import { useTheme } from "../components/hooks/useTheme";


export function Layout() {
  const {theme} = useTheme()

  return (
    <>
      <div data-theme={theme}>
        <Header />
        <NavBar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}
