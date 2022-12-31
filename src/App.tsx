import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Characters from './pages/Characters/Characters';
import SingleCharacter from './pages/Characters/SingleCharacter';
import Comics from './pages/Comics/Comics';
import SingleComic from './pages/Comics/SingleComic';
import Creators from './pages/Creators/Creators';
import Events from './pages/Events/Events';
import Series from './pages/Series/Series';
import Stories from './pages/Stories/Stories';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/Characters" />
            </Route>

            <Route path="/Characters" exact={true}>
              <Characters />
            </Route>
            <Route path="/SingleCharacter/:id" exact={true}>
              <SingleCharacter />
            </Route>

            <Route path="/Comics" exact>
              <Comics />
            </Route>
            <Route path="/SingleComic/:id" exact={true}>
              <SingleComic />
            </Route>

            <Route path="/Creators" exact>
              <Creators />
            </Route>

            <Route path="/Events" exact>
              <Events />
            </Route>

            <Route path="/Series" exact>
              <Series />
            </Route>

            <Route path="/Stories" exact>
              <Stories />
            </Route>

          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
