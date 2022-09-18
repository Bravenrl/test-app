import { Route, Routes } from 'react-router-dom';
import { AppRoute } from './config/app.config';
import PrivateRoute from './hoc/private-route/private-route';
import Contacts from './pages/contacts/contacts';
import Home from './pages/home/home';
import NotFound from './pages/not-found/not-found';

type AppProps = {};

const App = (props: AppProps) => {
  return (
    <Routes>
      <Route path={AppRoute.Home} element={<Home />} />
      <Route
        path={AppRoute.Contacts}
        element={
          <PrivateRoute>
            <Contacts />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.NotFound} element={<NotFound />} />
    </Routes>
  );
};

export default App;
