import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonThumbnail, IonTitle, IonToolbar, useIonLoading } from '@ionic/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { arrowForwardOutline, chevronBack, chevronForward } from 'ionicons/icons';
import env from '../../pages/env/env';

const IndexContent = (props: any) => {

  const name = props.name;
  const type = props.type;
  
  const [contents, setContents] = useState<any>([]);
  const [contentOffset, setContentOffset] = useState<any>();
  const [CName, setCName] = useState();
  const [offset, setOffset] = useState(0);
  const [perLoad, dismisspreLoad] = useIonLoading();
  const limit = 30;
  
  useEffect(() => {
    axios
      .get(env.url+type+"?limit="+limit+"&offset="+offset+"&"+env.key)
      .then(response => {
        setContentOffset(response.data.data);
        setContents(response.data.data.results);
        dismisspreLoad();
      })
  }, [offset, limit, type, dismisspreLoad])

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
        <IonList lines='full'>
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
                      if(content.name){
                        setCName(content.name);
                      } else if(content.title){
                        setCName(content.title);
                      } else if(content.fullName){
                        setCName(content.fullName);
                      }
                      window.location.href='/Single/'+name.toLowerCase()+'/'+content.id+'/'+CName;
                    }}
                  />
                </IonItem>
              )
            })
          }
        </IonList>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton
            slot='start'
            disabled={contentOffset?.offset === 0 ? true : false}
            onClick = {() => {
              perLoad({
                message: 'Loading...',
                spinner: 'circles'
              })
              setOffset(offset-limit);
            }}
          >
            <IonIcon icon={chevronBack} />
          </IonButton>
          <IonButton
            slot = 'end'
            disabled = {contentOffset?.offset + contentOffset?.limit >= contentOffset?.total ? true : false}
            onClick = { () => {
              perLoad({
                message: 'Loading...',
                spinner: 'circles'
              })
              setOffset(offset+limit);
            }}
          >
            <IonIcon icon={chevronForward} />
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default IndexContent;
