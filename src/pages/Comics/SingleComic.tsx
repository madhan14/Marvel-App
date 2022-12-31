import { IonButtons, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCardSubtitle } from '@ionic/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Comics.css';
import { useParams } from 'react-router';
import Events from '../../components/Events/Events';
import Series from '../../components/Series/Series';
import Stories from '../../components/Stories/Stories';
import Creators from '../../components/Creators/Creators';
import Characters from '../../components/Characters/Characters';

const SingleComic: React.FC = () => {

    const [comics, setComics] = useState<any>([]);
    const id = useParams<{ id: any; }>();
  
    useEffect(() => {
        axios
            .get("https://gateway.marvel.com/v1/public/comics/"+id.id+"?ts=1&apikey=12f5847be4794d8c2b8d85bca58b613d&hash=286ef4047eeb493bc6ac760f4bdcdc6d")
            .then(response => {
                setComics(response.data.data.results)
            })
    }, [id])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Comic</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonList>
                    {
                    comics?.map((comic: any, index: any) => {
                        return(
                            <div key={index}>
                                <IonCard>
                                    <img alt="" src={comic.thumbnail.path+'.'+comic.thumbnail.extension} />
                                    <IonCardHeader>
                                        <IonCardTitle>{comic.title}</IonCardTitle>
                                        <IonCardSubtitle>
                                            {comic.description}
                                            <p>Page count: {comic.pageCount}</p>
                                        </IonCardSubtitle>
                                    </IonCardHeader>

                                    {
                                        comic.urls?.map((url: any, index: any) => {
                                            return(
                                                <IonButton href={url.url} key={index} fill="clear">{url.type}</IonButton>
                                            )
                                        })
                                    }
                                </IonCard>
                                <Characters characters={comic.characters} />
                                <Creators creators={comic.creators} />
                                <Events events={comic.events} />
                                <Series series={comic.series} />
                                <Stories stories={comic.stories} />
                            </div>
                        )
                    })
                    }
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default SingleComic;
