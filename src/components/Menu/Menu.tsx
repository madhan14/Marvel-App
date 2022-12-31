import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
  } from '@ionic/react';
  
  import { useLocation } from 'react-router-dom';
  import { archiveOutline, archiveSharp, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
  import './Menu.css';
  
  interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
  }
  
  const appPages: AppPage[] = [
    {
      title: 'All Characters',
      url: '/Characters',
      iosIcon: mailOutline,
      mdIcon: mailSharp
    },
    {
      title: 'Comics',
      url: '/page/Comics',
      iosIcon: paperPlaneOutline,
      mdIcon: paperPlaneSharp
    },
    {
      title: 'Creators',
      url: '/page/Creators',
      iosIcon: heartOutline,
      mdIcon: heartSharp
    },
    {
      title: 'Events',
      url: '/page/Events',
      iosIcon: archiveOutline,
      mdIcon: archiveSharp
    },
    {
      title: 'Series',
      url: '/page/Series',
      iosIcon: trashOutline,
      mdIcon: trashSharp
    },
    {
      title: 'Stories',
      url: '/page/Stories',
      iosIcon: warningOutline,
      mdIcon: warningSharp
    }
  ];
    
  const Menu: React.FC = () => {
    const location = useLocation();
  
    return (
      <IonMenu contentId="main" type="overlay">
        <IonContent>
          <IonList id="inbox-list">
            <IonListHeader>Marvel</IonListHeader>
            <IonNote>madhankumar05072000@gmail.com</IonNote>
            {appPages.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
          </IonList>
        </IonContent>
      </IonMenu>
    );
  };
  
  export default Menu;
  