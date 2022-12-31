import { IonButtons, IonButton, IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCardSubtitle } from '@ionic/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Series.css';
import { useParams } from 'react-router';
import Characters from '../../components/Characters/Characters';
import Comics from '../../components/Comics/Comics';
import Creators from '../../components/Creators/Creators';
import Events from '../../components/Events/Events';
import Stories from '../../components/Stories/Stories';

const SingleSeries: React.FC = () => {

  const [series, setSeries] = useState<any>([]);
  const id = useParams<{ id: any; }>();
  
  useEffect(() => {
    axios
      .get("https://gateway.marvel.com/v1/public/series/"+id.id+"?ts=1&apikey=12f5847be4794d8c2b8d85bca58b613d&hash=286ef4047eeb493bc6ac760f4bdcdc6d")
      .then(response => {
        setSeries(response.data.data.results)
      })
  }, [id])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Series</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {
            series?.map((series: any, index: any) => {
              return(
                <div key={index}>
                  <IonCard>
                    <img alt="" src={series.thumbnail.path+'.'+series.thumbnail.extension} />
                    <IonCardHeader>
                      <IonCardTitle>{series.title}</IonCardTitle>
                      <IonCardSubtitle>
                        {series.description}
                      </IonCardSubtitle>
                    </IonCardHeader>
                    {
                      series.urls?.map((url: any, index: any) => {
                        return(
                          <IonButton href={url.url} key={index} fill="clear">{url.type}</IonButton>
                        )
                      })
                    }
                  </IonCard>
                  <Characters characters={series.characters} />
                  <Comics comics={series.comics} />
                  <Creators creators={series.creators} />
                  <Events events={series.events} />
                  <Stories stories={series.stories} />
                </div>
              )
            })
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SingleSeries;
