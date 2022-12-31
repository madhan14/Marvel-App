import { IonButtons, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCardSubtitle } from '@ionic/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Comics.css';
import { useParams } from 'react-router';

const SingleComic: React.FC = () => {

  const [comics, setComics] = useState<any>([]);
  const id = useParams<{ id: any; }>();
  
  useEffect(() => {
    axios
      .get("https://gateway.marvel.com/v1/public/comics/"+id.id+"?ts=1&apikey=12f5847be4794d8c2b8d85bca58b613d&hash=286ef4047eeb493bc6ac760f4bdcdc6d")
      .then(response => {
        console.log(response.data.data)
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
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>Creators</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                {
                                    comic.creators.items?.map((item: any, index: any) => {
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
                                <IonCardTitle>Characters</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                {
                                    comic.characters.items?.map((item: any, index: any) => {
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
                                {/* {
                                    comic.series.items?.map((item: any, index: any) => {
                                        return( */}
                                            <IonItem>
                                                <p>{comic.series.name}</p>
                                            </IonItem>
                                        {/* )
                                    })
                                } */}
                            </IonCardContent>
                        </IonCard>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>Stories</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                {
                                    comic.stories.items?.map((item: any, index: any) => {
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

export default SingleComic;
