
import { lazy } from "react";
import {BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import LazyLoading from "./_common/components/LazyLoading";

const DashboardRoutes = lazy(() => import("./Modules/dashboard/dashboard.routes"));
const TasksRoutes = lazy(() => import("./Modules/tasks/tasks.routes"));
const UsersRoutes = lazy(() => import("./Modules/users/users.routes"));

const MainRoutes = () => {
    return (
        <BrowserRouter>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/tarefas">Tasks</Link>
                </li>
                <li>
                  <Link to="/usuarios">Usuários</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/dashboard" component={LazyLoading(DashboardRoutes)} />
              <Route path="/tarefas" component={LazyLoading(TasksRoutes)} />
              <Route path="/usuarios" component={LazyLoading(UsersRoutes)} />

              <Redirect to="/dashboard"/>
            </Switch>
          </div>
        </BrowserRouter>
      );
};

export default MainRoutes;
