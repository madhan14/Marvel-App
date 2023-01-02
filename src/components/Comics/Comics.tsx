import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem } from '@ionic/react';
// import Modal from '../Modal/Modal';

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
                                <IonItem key={index}>
                                    {/* <Modal item={item}/> */}
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

export default Comics;
