import { IonButtons, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCardSubtitle } from '@ionic/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Stories.css';
import { useParams } from 'react-router';
import Characters from '../../components/Characters/Characters';
import Comics from '../../components/Comics/Comics';
import Creators from '../../components/Creators/Creators';
import Events from '../../components/Events/Events';
import Series from '../../components/Series/Series';

const SingleStorie: React.FC = () => {

  const [stories, setStories] = useState<any>([]);
  const id = useParams<{ id: any; }>();
  
  useEffect(() => {
    axios
      .get("https://gateway.marvel.com/v1/public/stories/"+id.id+"?ts=1&apikey=12f5847be4794d8c2b8d85bca58b613d&hash=286ef4047eeb493bc6ac760f4bdcdc6d")
      .then(response => {
        setStories(response.data.data.results)
      })
  }, [id])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Stories</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      {
        stories?.map((story: any, index: any) => {
          return(
            <div key={index}>
              <IonCard>
                <img alt="" src={story.thumbnail?.path+'.'+story.thumbnail?.extension} />
                <IonCardHeader>
                  <IonCardTitle>{story.title}</IonCardTitle>
                  <IonCardSubtitle>
                    {story.description}
                  </IonCardSubtitle>
                </IonCardHeader>
                {
                  story.urls?.map((url: any, index: any) => {
                    return(
                      <IonButton href={url.url} key={index} fill="clear">{url.type}</IonButton>
                    )
                  })
                }
              </IonCard>
              <Characters characters={story.characters} />
              <Comics comics={story.comics} />
              <Creators creators={story.creators} />
              <Events events={story.events} />
              <Series series={story.series} />
            </div>
          )
        })
      }
      </IonContent>
    </IonPage>
  );
};

export default SingleStorie;
