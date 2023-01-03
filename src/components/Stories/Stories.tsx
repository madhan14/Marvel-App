import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem } from '@ionic/react';
import Modal from '../Modal/Modal';

const Stories = (props: any) => {
    if(props.stories.available > 0){
        return(
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Stories</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    {
                        props.stories.items?.map((item: any, index: any) => {
                            return(
                                <IonItem key={index}>
                                    <Modal item={item} />
                                    {/* <p>{item.name}</p> */}
                                </IonItem>
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

export default Stories;