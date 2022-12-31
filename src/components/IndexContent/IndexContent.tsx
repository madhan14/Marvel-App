import { IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { arrowForwardOutline } from 'ionicons/icons';

const IndexContent = (props: any) => {

  const name = props.name;
  const type = props.type;
  
  const [contents, setContents] = useState<any>([]);
  
  useEffect(() => {
    axios
      .get("https://gateway.marvel.com/v1/public/"+type+"?limit=25&ts=1&apikey=12f5847be4794d8c2b8d85bca58b613d&hash=286ef4047eeb493bc6ac760f4bdcdc6d")
      .then(response => {
        // console.log(response.data.data)
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
                        window.location.href='/Single'+name.substring(0, name.length - 1)+'/'+content.id;
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
