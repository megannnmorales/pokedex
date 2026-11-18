import { Outlet } from "react-router";
import { Header } from "../components/Header";
import NavBar from "../components/NavBar";

export function Layout() {
  return (
    <>
      <Header />
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
