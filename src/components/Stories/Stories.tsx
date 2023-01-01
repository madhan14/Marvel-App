import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
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

export default Stories;