import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import Modal from '../Modal/Modal';

const Events = (props: any) => {
    if(props.events.available > 0){
        return(
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Events</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    {
                        props.events.items?.map((item: any, index: any) => {
                            return(
                                <div key={index}>
                                    <Modal item={item} />
                                </div>
                            )
                        })
                    }
                </IonCardContent>
            </IonCard>
        );

    } else {
        return <></>
    }
};

export default Events;
