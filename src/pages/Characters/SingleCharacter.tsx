import { IonButtons, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Characters.css';
import { useParams } from 'react-router';

const SingleCharacter: React.FC = () => {

  const [character, setCharacter] = useState<any>([]);
  const id = useParams<{ id: any; }>();
  
  useEffect(() => {
    axios
      .get("https://gateway.marvel.com/v1/public/characters/"+id.id+"?ts=1&apikey=12f5847be4794d8c2b8d85bca58b613d&hash=286ef4047eeb493bc6ac760f4bdcdc6d")
      .then(response => {
        setCharacter(response.data.data.results)
      })
  }, [id])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Character</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
            {
              character?.map((character: any, index: any) => {
                return(
                    <div key={index}>
                        <IonCard>
                            <img alt="" src={character.thumbnail.path+'.'+character.thumbnail.extension} />
                            <IonCardHeader>
                                <IonCardTitle>{character.name}</IonCardTitle>
                            </IonCardHeader>

                            {
                                character.urls?.map((url: any, index: any) => {
                                    return(
                                        <IonButton href={url.url} key={index} fill="clear">{url.type}</IonButton>
                                    )
                                })
                            }
                        </IonCard>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>Comics</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                {
                                    character.comics.items?.map((item: any, index: any) => {
                                        return(
                                            <IonItem key={index}>
                                                <p>{item.name}</p>
                                            </IonItem>
                                        )
                                    })
                                }
                            </IonCardContent>
                        </IonCard>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>Series</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                {
                                    character.series.items?.map((item: any, index: any) => {
                                        return(
                                            <IonItem key={index}>
                                                <p>{item.name}</p>
                                            </IonItem>
                                        )
                                    })
                                }
                            </IonCardContent>
                        </IonCard>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>Stories</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                {
                                    character.stories.items?.map((item: any, index: any) => {
                                        return(
                                            <IonItem key={index}>
                                                <p>{item.name}</p>
                                            </IonItem>
                                        )
                                    })
                                }
                            </IonCardContent>
                        </IonCard>
                    </div>
                )
              })
            }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SingleCharacter;
