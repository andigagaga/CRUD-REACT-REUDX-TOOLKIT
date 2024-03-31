import React from "react";
import JumbotronComponent from "./components/JumbotronComponent";
import TableComponent from "./components/TableComponent";
import Router from "./components/Router";
import { NavbarComponent } from "./components/index";

export default function App() {
  return (
    <div className="bg-secondary-subtle">
      <NavbarComponent />
      <Router />
    </div>
  );
}
