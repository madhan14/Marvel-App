import { IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { arrowForwardOutline } from 'ionicons/icons';
import env from '../../pages/env/env';

const IndexContent = (props: any) => {

  const name = props.name;
  const type = props.type;
  
  const [contents, setContents] = useState<any>([]);
  
  useEffect(() => {
    axios
      .get(env.url+type+"?limit=25&"+env.key)
      .then(response => {
        setContents(response.data.data.results)
      })
  }, [type])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>All {name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
            {
              contents?.map((content: any, index: any) => {
                return(
                  <IonItem key={index}>
                    <IonThumbnail slot='start'>
                      <img alt='' src={content.thumbnail?.path+'.'+content.thumbnail?.extension} />
                    </IonThumbnail>
                    <IonLabel>
                      {content.name}
                      {content.title}
                      {content.fullName}
                    </IonLabel>
                    <IonIcon
                      icon={arrowForwardOutline}
                      slot="end"
                      color='primary'
                      onClick={() => {
                        window.location.href='/Single/'+name.toLowerCase()+'/'+content.id;
                      }}
                    />
                  </IonItem>
                  
                )
              })
            }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default IndexContent;
