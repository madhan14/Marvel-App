import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import Modal from '../Modal/Modal';

const Characters = (props: any) => {
    if(props.characters.available > 0){
        return (
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Characters</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    {
                        props.characters.items?.map((item: any, index: any) => {
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

export default Characters;
