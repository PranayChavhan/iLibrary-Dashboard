import React from "react";
import IssuedResource from "./views/pages/Resource/IssuedResource";
import Demo from "./views/pages/Students/demo";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

const Widgets = React.lazy(() => import("./views/widgets/Widgets"));

const Books = React.lazy(() => import("./views/pages/Shelf/Books"));

const AddBook = React.lazy(() => import("./views/pages/Shelf/AddBook"));

const TotalUsers = React.lazy(() => import("./views/pages/Students/TotalUser"));

const AddUser = React.lazy(() => import("./views/pages/Students/AddUser"));

const IssuedBook = React.lazy(() => import("./views/pages/Shelf/IssuedBook"));

const WaitingList = React.lazy(() => import("./views/pages/Shelf/WaitingList"));

const TotalTeacher = React.lazy(() =>
  import("./views/pages/Teachers/TotalTeacher")
);

const AddTeacher = React.lazy(() =>
  import("./views/pages/Teachers/AddTeacher")
);

const TotalResource = React.lazy(() =>
  import("./views/pages/Resource/TotalResource")
);

const AddResource = React.lazy(() =>
  import("./views/pages/Resource/AddResource")
);

const Totalebook = React.lazy(() => import("./views/pages/Ebook/Totalebook"));

const Addebook = React.lazy(() => import("./views/pages/Ebook/Addebook"));

const LoginPage = React.lazy(() => import("./views/pages/LoginPage"));

const EditBook = React.lazy(() => import("./views/pages/Shelf/EditBook"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/widgets", name: "Widgets", component: Widgets },
  { path: "/books", name: "Books", component: Books },
  { path: "/add-books", name: "AddBooks", component: AddBook },
  { path: "/total-students", name: "TotalUsers", component: TotalUsers },
  { path: "/add-students", name: "AddUser", component: AddUser },
  { path: "/issued-book", name: "IssuedBook", component: IssuedBook },
  { path: "/waiting-list", name: "WaitingList", component: WaitingList },
  { path: "/total-teachers", name: "TotalTeacher", component: TotalTeacher },
  { path: "/add-teachers", name: "AddTeacher", component: AddTeacher },
  { path: "/total-resources", name: "TotalTeacher", component: TotalResource },
  { path: "/add-resources", name: "AddTeacher", component: AddResource },
  { path: "/total-ebooks", name: "Addebook", component: Totalebook },
  { path: "/add-ebook", name: "Addebook", component: Addebook },
  { path: "edit/:name", name: "Editbook", component: EditBook },
  { path: "/demo", name: "Demo", component: Demo },
  { path: "/issued-resources", name: "IssuedResource", component: IssuedResource },


];

export default routes;
