import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem } from '@ionic/react';
// import Modal from '../Modal/Modal';

const Creators = (props: any) => {
    if(props.creators.available > 0){
        return (
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Creators</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    {
                        props.creators.items?.map((item: any, index: any) => {
                            return(
                                <IonItem key={index}>
                                    {/* <Modal item={item} /> */}
                                    <p>{item.name}</p>
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

export default Creators;
