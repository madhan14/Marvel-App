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
  const [offset, setOffset] = useState(0);
  const [perLoad, dismisspreLoad] = useIonLoading();
  const data = localStorage.getItem('data');
  const limit = 30;
  var CName: string; 
  if(contents.length === 0){
    dismisspreLoad();
  } else {
    perLoad({
      message: 'Loading...',
      spinner: 'circles',
      duration: 2000
    })
  }
  if(!localStorage.getItem('offset')){
    localStorage.setItem('offset', String(offset));
  }

  useEffect(() => {
    // if(!data){
      axios
      .get(env.url+type+"?limit="+limit+"&offset="+localStorage.getItem('offset')+"&"+env.key)
      .then(response => {
        setContentOffset(response.data.data);
        setContents(response.data.data.results);
        localStorage.setItem( 'data', JSON.stringify(
          {
            type: type,
            offset: String(offset),
            data: response.data.data
          })
        )        
        dismisspreLoad();
      })
    // } else {
    //   setContents(JSON.parse(data).data.results)
    //   setContentOffset(JSON.parse(data).data)
    // }
  }, [offset, limit, type, dismisspreLoad, data])
  
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
              if(content.thumbnail?.path.includes('not_available') == false){
                return(
                  <IonItem key={index}>
                    <IonThumbnail slot='start'>
                      <img alt='' src={content.thumbnail?.path.replace('http', 'https')+'.'+content.thumbnail?.extension} />
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
                        localStorage.setItem('offset', String(offset))
                        if(content.name){
                          CName = content.name;
                        } else if(content.title){
                          CName = content.title;
                        } else if(content.fullName){
                          CName = content.fullName;
                        }
                        window.location.href='/Single/'+name.toLowerCase()+'/'+content.id+'/'+CName;
                      }}
                    />
                  </IonItem>
                )
              }
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
              localStorage.setItem('offset', String(offset-limit))
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
              localStorage.setItem('offset', String(offset+limit))
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
