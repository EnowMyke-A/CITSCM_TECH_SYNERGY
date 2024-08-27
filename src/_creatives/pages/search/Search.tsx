import './search.css'
import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { fileTrayStacked, filter, gridOutline, gridSharp, person, personCircleOutline, search, searchCircle } from 'ionicons/icons';
import React from 'react';

const Search: React.FC = () => {

    return (
        <IonPage className='search-page-container'>
            <IonContent className="ion-padding">
                <label htmlFor='search-bar' className="search-bar">
                    <IonIcon icon={search} />
                    <input type="text" name="search-bar" id="search-bar"
                    placeholder='Search for artworks, artists, and more' />
                </label>

                <div className="filter-container">
                    <div className="filter">
                        <IonIcon icon={filter} />
                        <span>Name of art</span>
                    </div>
                    <div className="filter">
                        <IonIcon icon={personCircleOutline} />
                        <span>Artist</span>
                    </div>
                    <div className="filter">
                        <IonIcon icon={gridOutline} />
                        <span>Art Category</span>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Search;