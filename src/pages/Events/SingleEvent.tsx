import { IonButtons, IonButton, IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCardSubtitle } from '@ionic/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Events.css';
import { useParams } from 'react-router';
import Characters from '../../components/Characters/Characters';
import Comics from '../../components/Comics/Comics';
import Creators from '../../components/Creators/Creators';
import Series from '../../components/Series/Series';
import Stories from '../../components/Stories/Stories';

const SingleEvent: React.FC = () => {

    const [events, setEvents] = useState<any>([]);
    const id = useParams<{ id: any; }>();
  
    useEffect(() => {
        axios
          .get("https://gateway.marvel.com/v1/public/events/"+id.id+"?ts=1&apikey=12f5847be4794d8c2b8d85bca58b613d&hash=286ef4047eeb493bc6ac760f4bdcdc6d")
          .then(response => {
              setEvents(response.data.data.results)
          })
    }, [id])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Event</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonList>
                    {
                        events?.map((event: any, index: any) => {
                            return(
                                <div key={index}>
                                    <IonCard>
                                        <img alt="" src={event.thumbnail.path+'.'+event.thumbnail.extension} />
                                        <IonCardHeader>
                                            <IonCardTitle>{event.title}</IonCardTitle>
                                            <IonCardSubtitle>
                                                {event.description}
                                            </IonCardSubtitle>
                                        </IonCardHeader>
                                        {
                                            event.urls?.map((url: any, index: any) => {
                                                return(
                                                    <IonButton href={url.url} key={index} fill="clear">{url.type}</IonButton>
                                                )
                                            })
                                        }
                                    </IonCard>
                                    <Characters characters={event.characters} />
                                    <Comics comics={event.comics} />
                                    <Creators creators={event.creators} />
                                    <Series series={event.series} />
                                    <Stories stories={event.stories} />
                                </div>
                            )
                        })
                    }
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default SingleEvent;
