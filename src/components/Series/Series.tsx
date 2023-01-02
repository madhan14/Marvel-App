import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem } from '@ionic/react';
import Modal from '../Modal/Modal';

const Series = (props: any) => {
    if(props.series.available > 0){
        return(
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Series</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    {
                        props.series.items?.map((item: any, index: any) => {
                            return(
                                <IonItem key={index}>
                                    <p>{item.name}</p>
                                </IonItem>
                            )
                        })
                    }
                </IonCardContent>
            </IonCard>
        )
    } else {
        return <></>
    }
}

export default Series;