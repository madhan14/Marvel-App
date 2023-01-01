import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
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
                                <div key={index}>
                                    <Modal item={item} />
                                </div>
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