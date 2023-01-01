import { IonButton, IonButtons, IonTitle, IonCard, IonCardHeader, IonHeader, IonItem, IonModal, IonToolbar, IonContent, IonCardSubtitle } from '@ionic/react';
import axios from 'axios';
import { useRef, useState } from 'react';
import env from '../../pages/env/env';

const Modal = (props: any) => {
    const modal = useRef<HTMLIonModalElement>(null);
    const [Modal, setModal] = useState<any>();

    const newModal = (props: any) => {
        axios
            .get(props.resourceURI+"?"+env.key)
            .then(response => {
                setModal(response.data.data.results)
            })
    }

    return(
        <IonItem>
            <IonButton onClick={() => newModal(props.item)} id={props.item.resourceURI.split('public/')[1].split('/')[1]} expand="block" fill='clear'>
                {props.item.name}
            </IonButton>
            <IonModal ref={modal} trigger={props.item.resourceURI.split('public/')[1].split('/')[1]}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>{props.item.name}</IonTitle>
                        <IonButtons slot="end">
                            <IonButton onClick={() => modal.current?.dismiss()}>Close</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className='ion-padding'>
                    {
                        Modal?.map((modal: any, index: any) => {
                            return(
                                <div key={index}>
                                    <IonCard>
                                        <img alt='' src={modal.thumbnail?.path+'.'+modal.thumbnail?.extension} />
                                        <IonCardHeader>
                                            <IonCardSubtitle>{modal.description}</IonCardSubtitle>
                                        </IonCardHeader>
                                        {
                                            modal.urls?.map((url: any, index: any) => {
                                                return(
                                                    <IonButton href={url.url} key={index} fill="clear">{url.type}</IonButton>
                                                )
                                            })
                                        }
                                        {
                                            modal.images?.map((image: any, index: any) => {
                                                return(
                                                    <div key={index} style={{ marginTop: 10, marginBottom: 10 }}>
                                                        <img alt="" src={image.path+'.'+image.extension} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </IonCard>
                                </div>
                            );
                        })
                    }
                </IonContent>
            </IonModal>
        </IonItem>
    )
    
};

export default Modal;
