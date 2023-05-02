import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Events from './features/events/Events';
import Login from './features/auth/login/Login';
import PersistLogin from './features/auth/PersistLogin';
import DashLayout from './components/dash_layout/DashLayout';
import Users from './features/users/Users';
// import Home from './features/Home';
// import DashLayout from './features/DashLayout';
// import PageNotFound from './features/PageNotFound';
// import Welcome from './features/auth/Welcome';
// import NotesList from './features/notes/NotesList';
// import UsersList from './features/users/UsersList';
// import NewUserFrom from './features/users/NewUserFrom';
// import ProtectedRoutes from './features/ProtectedRoutes';
// import ROLES from './config/roles';
// import EditUserForm from './features/users/EditUserForm';
// import NewNoteForm from './features/notes/NewNoteForm';
// import EditNoteForm from './features/notes/EditNoteForm';
// import Profile from './features/users/Profile';
// import NotificationsList from './features/notifications/NotificationsList';

const App = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route element={<PersistLogin />}>
        <Route element={<DashLayout />}>
          <Route path="events">
            <Route index element={<Events />} />
          </Route>
          <Route path="users">
            <Route index element={<Users />} />
          </Route>
        </Route>
      </Route>
      {/* Public routes */}
      {/* 
      <Route path="login" element={<Login />} /> */}
      {/* Private routes */}
      {/* <Route element={<PersistLogin />}>
        <Route path="dash" element={<DashLayout />}>
          <Route index element={<Welcome />} />
          <Route path="profile">
            <Route index element={<Profile />} />
          </Route>
          <Route path="notifications">
            <Route index element={<NotificationsList />} />
          </Route>
          <Route path="notes">
            <Route index element={<NotesList />} />
            <Route path="addnote" element={<NewNoteForm />} />
            <Route path=":id" element={<EditNoteForm />} />
          </Route>
          <Route element={<ProtectedRoutes allowedRoles={[ROLES[2].value, ROLES[1].value]} />}>
            <Route path="users">
              <Route index element={<UsersList />} />
              <Route element={<ProtectedRoutes allowedRoles={[ROLES[2].value]} />}>
                <Route path="signin" element={<NewUserFrom />} />
                <Route path=":id" element={<EditUserForm />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Route> */}
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
};

export default App;
