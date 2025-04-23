/* eslint-disable jsx-a11y/anchor-is-valid */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Contact from "./components/Contact.jsx";
import Form from "./components/Form.jsx";
import Home from "./components/Home.jsx";
import SideBar from "./components/SideBar.jsx";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SideBar />
      <div id="detail">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contacts/new">
            <Form />
          </Route>
          <Route path="/contacts/:contactId/edit">
            <Form />
          </Route>
          <Route path="/contacts/:contactId">
            <Contact />
          </Route>
        </Switch>
      </div>
    </QueryClientProvider>
  );
}
