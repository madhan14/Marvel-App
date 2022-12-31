import { IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Characters.css';
import { arrowForwardOutline } from 'ionicons/icons';

const Characters: React.FC = () => {

  const name = window.location.pathname.split('/')[1];
  const [characters, setCharacters] = useState<any>([]);
  
  useEffect(() => {
    axios
      .get("https://gateway.marvel.com/v1/public/characters?limit=25&ts=1&apikey=12f5847be4794d8c2b8d85bca58b613d&hash=286ef4047eeb493bc6ac760f4bdcdc6d")
      .then(response => {
        setCharacters(response.data.data.results)
      })
  }, [])

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
              characters?.map((character: any, index: any) => {
                return(
                  <IonItem key={index}>
                    <IonThumbnail slot='start'>
                      <img alt='test' src={character.thumbnail.path+'.'+character.thumbnail.extension} />
                    </IonThumbnail>
                    <IonLabel>{character.name}</IonLabel>
                    <IonIcon
                      icon={arrowForwardOutline}
                      slot="end"
                      color='primary'
                      onClick={() => {
                        window.location.href='/SingleCharacter/'+character.id;
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

export default Characters;
