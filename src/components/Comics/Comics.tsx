import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import Modal from '../Modal/Modal';

const Comics = (props: any) => {

    if(props.comics.available > 0){
        return (
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Comics</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    {
                        props.comics.items?.map((item: any, index: any) => {
                            return(
                                <div key={index}>
                                    <Modal item={item}/>
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

export default Comics;
