import { IonButtons, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCardSubtitle } from '@ionic/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Creators.css';
import { useParams } from 'react-router';
import Comics from '../../components/Comics/Comics';
import Events from '../../components/Events/Events';
import Series from '../../components/Series/Series';
import Stories from '../../components/Stories/Stories';

const SingleCreator: React.FC = () => {

    const [creators, setCreators] = useState<any>([]);
    const id = useParams<{ id: any; }>();
  
    useEffect(() => {
        axios
            .get("https://gateway.marvel.com/v1/public/creators/"+id.id+"?ts=1&apikey=12f5847be4794d8c2b8d85bca58b613d&hash=286ef4047eeb493bc6ac760f4bdcdc6d")
            .then(response => {
                setCreators(response.data.data.results)
            })
    }, [id])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Creator</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonList>
                    {
                        creators?.map((creator: any, index: any) => {
                            return(
                                <div key={index}>
                                    <IonCard>
                                        <img alt="" src={creator.thumbnail.path+'.'+creator.thumbnail.extension} />
                                        <IonCardHeader>
                                            <IonCardTitle>{creator.fullName}</IonCardTitle>
                                            <IonCardSubtitle>
                                                {creator.description}
                                            </IonCardSubtitle>
                                        </IonCardHeader>
                                        {
                                            creator.urls?.map((url: any, index: any) => {
                                                return(
                                                    <IonButton href={url.url} key={index} fill="clear">{url.type}</IonButton>
                                                )
                                            })
                                        }
                                    </IonCard>
                                    <Comics comics={creator.comics} />
                                    <Events events={creator.events} />
                                    <Series series={creator.series} />
                                    <Stories stories={creator.stories} />
                                </div>
                            )
                        })
                    }
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default SingleCreator;
