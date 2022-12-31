import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer/ExploreContainer';
import './Tab6.css';

const Tab6: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 6</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 6</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 6 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab6;
