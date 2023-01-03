import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem } from '@ionic/react';
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

export default Characters;
