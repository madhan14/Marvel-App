import { IonButtons, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonContent, IonHeader, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import './Characters.css';
import { useParams } from 'react-router';
import Comics from '../Comics/Comics';
import Events from '../Events/Events';
import Series from '../Series/Series';
import Stories from '../Stories/Stories';
import Creators from '../Creators/Creators';
import Characters from '../Characters/Characters';
import env from '../../pages/env/env';

const SingleContent: React.FC = () => {

    const [contents, setContents] = useState<any>([]);
    const parameters = useParams<{ id: any; name: any; character: any; }>();
    const id = parameters.id;
    const name = parameters.name;
    const characterName = parameters.character;

    useEffect(() => {
        axios
            .get(env.url+name+"/"+id+"?"+env.key)
            .then(response => {
                setContents(response.data.data.results)
            })
    }, [id, name])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{characterName}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonList>
                    {
                        contents?.map((content: any, index: any) => {
                            return(
                                <div key={index}>
                                    <IonCard>
                                        <img alt="" src={content.thumbnail?.path.replace('http', 'https')+'.'+content.thumbnail?.extension} />
                                        <IonCardHeader>
                                            <IonCardTitle>{content.name ? content.name : content.title}</IonCardTitle>
                                            <IonCardSubtitle>{content.description? content.description : ''}</IonCardSubtitle>
                                        </IonCardHeader>
                                        {
                                            content.urls?.map((url: any, index: any) => {
                                                return(
                                                    <IonButton href={url.url} key={index} fill="clear">{url.type}</IonButton>
                                                )
                                            })
                                        }
                                    </IonCard>
                                    {content.characters ? <Characters characters={content.characters} /> : ''}
                                    {content.creators ? <Creators creators={content.creators} /> : ''}
                                    {content.comics ? <Comics comics={content.comics} /> : ''}
                                    {content.events ? <Events events={content.events} /> : ''}
                                    {content.series ? <Series series={content.series} /> : ''}
                                    {content.stories ? <Stories stories={content.stories} /> : ''}
                                </div>
                            )
                        })
                    }
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default SingleContent;
