import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const Books = React.lazy(() => import('./views/pages/Shelf/Books'))

const AddBook = React.lazy(() => import('./views/pages/Shelf/AddBook'))

const TotalUsers = React.lazy(() => import('./views/pages/Students/TotalUser'))

const AddUser = React.lazy(() => import('./views/pages/Students/AddUser'))

const IssuedBook = React.lazy(() => import('./views/pages/Shelf/IssuedBook'))

const WaitingList = React.lazy(() => import('./views/pages/Shelf/WaitingList'))

const TotalTeacher = React.lazy(() => import('./views/pages/Teachers/TotalTeacher'))

const AddTeacher = React.lazy(() => import('./views/pages/Teachers/AddTeacher'))

const TotalResource = React.lazy(() => import('./views/pages/Resource/TotalResource'))

const AddResource = React.lazy(() => import('./views/pages/Resource/AddResource'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/books', name: 'Books', component: Books },
  { path: '/add-books', name: 'AddBooks', component: AddBook },
  { path: '/total-students', name: 'TotalUsers', component: TotalUsers },
  { path: '/add-students', name: 'AddUser', component: AddUser},
  { path: '/issued-book', name: 'IssuedBook', component: IssuedBook},
  { path: '/waiting-list', name: 'WaitingList', component: WaitingList},
  { path: '/total-teachers', name: 'TotalTeacher', component: TotalTeacher},
  { path: '/add-teachers', name: 'AddTeacher', component: AddTeacher},
  { path: '/total-resources', name: 'TotalTeacher', component: TotalResource},
  { path: '/add-resources', name: 'AddTeacher', component: AddResource},
]

export default routes
