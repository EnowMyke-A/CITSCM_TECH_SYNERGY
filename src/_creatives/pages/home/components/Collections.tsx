import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import ProductList from './ProductList';

const Collections: React.FC = () => {
  const africanPaintingCollection = [
    {
      product_name: 'Twaaga',
      author_name: 'El Anatsui',
      product_link:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/El_Anatsui_-_Twaaga_-_Tate_Britain.jpg/1200px-El_Anatsui_-_Twaaga_-_Tate_Britain.jpg',
      product_price: '900',
    },
    {
      product_name: 'The Yellow House',
      author_name: 'Tschabalala Self',
      product_link:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Tschabalala_Self_-_The_Yellow_House_-_2019.jpg/1200px-Tschabalala_Self_-_The_Yellow_House_-_2019.jpg',
      product_price: '3000',
    },
    {
      product_name: 'Crossroads',
      author_name: 'Bartholomew Bubuama',
      product_link:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Bartholomew_Bubuama_-_Crossroads_-_2010.jpg/1200px-Bartholomew_Bubuama_-_Crossroads_-_2010.jpg',
      product_price: '7000',
    },
    {
      product_name: 'Red, Blue, and Green',
      author_name: 'Odili Donald Odita',
      product_link:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Odili_Donald_Odita_-_Untitled_%28Red%2C_Blue%2C_and_Green%29_-_2013.jpg/1200px-Odili_Donald_Odita_-_Untitled_%28Red%2C_Blue%2C_and_Green%29_-_2013.jpg',
      product_price: '14000',
    },
    {
      product_name: 'The Last Supper',
      author_name: 'Amadou Sow',
      product_link:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Amadou_Sow_-_The_Last_Supper_-_2012.jpg/1200px-Amadou_Sow_-_The_Last_Supper_-_2012.jpg',
      product_price: '30000',
    },
  ];

  const africanDrawingCollection = [
    {
      product_name: 'Figures in a Landscape',
      author_name: 'El Anatsui',
      product_link:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/El_Anatsui_-_Untitled_%28Figures_in_a_Landscape%29_-_2012.jpg/1200px-El_Anatsui_-_Untitled_%28Figures_in_a_Landscape%29_-_2012.jpg',
      product_price: '457',
    },
    {
      product_name: 'Self-Portrait',
      author_name: 'Tschabalala Self',
      product_link:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Tschabalala_Self_-_Untitled_%28Self-Portrait%29_-_2019.jpg/1200px-Tschabalala_Self_-_Untitled_%28Self-Portrait%29_-_2019.jpg',
      product_price: '5768',
    },
    {
      product_name: 'Figure with a Bird',
      author_name: 'William Kentridge',
      product_link:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/William_Kentridge_-_Untitled_%28Figure_with_a_Bird%29_-_1998.jpg/1200px-William_Kentridge_-_Untitled_%28Figure_with_a_Bird%29_-_1998.jpg',
      product_price: '657',
    },
    {
      product_name: 'Figures in a Landscape',
      author_name: 'Odili Donald Odita',
      product_link:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Odili_Donald_Odita_-_Untitled_%28Figures_in_a_Landscape%29_-_2013.jpg/1200px-Odili_Donald_Odita_-_Untitled_%28Figures_in_a_Landscape%29_-_2013.jpg',
      product_price: '346',
    },
    {
      product_name: 'Figures in a Landscape',
      author_name: 'Amadou Sow',
      product_link:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Amadou_Sow_-_Untitled_%28Figures_in_a_Landscape%29_-_2012.jpg/1200px-Amadou_Sow_-_Untitled_%28Figures_in_a_Landscape%29_-_2012.jpg',
      product_price: '123',
    },
  ];

  const africanSculptureCollection = [
    {
      product_name: 'Bronze Head',
      author_name: 'El Anatsui',
      product_link:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/El_Anatsui_-_Untitled_%28Bronze_Head%29_-_2012.jpg/1200px-El_Anatsui_-_Untitled_%28Bronze_Head%29_-_2012.jpg',
      product_price: '789',
    },
    {
      product_name: 'Wooden Figure',
      author_name: 'Tschabalala Self',
      product_link:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Tschabalala_Self_-_Untitled_%28Wooden_Figure%29_-_2019.jpg/1200px-Tschabalala_Self_-_Untitled_%28Wooden_Figure%29_-_2019.jpg',
      product_price: '670',
    },
    {
      product_name: 'Bronze Figure',
      author_name: 'William Kentridge',
      product_link:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/William_Kentridge_-_Untitled_%28Bronze_Figure%29_-_1998.jpg/1200px-William_Kentridge_-_Untitled_%28Bronze_Figure%29_-_1998.jpg',
      product_price: '456',
    },
    {
      product_name: 'Bronze Figure',
      author_name: 'Odili Donald Odita',
      product_link:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Odili_Donald_Odita_-_Untitled_%28Bronze_Figure%29_-_2013.jpg/1200px-Odili_Donald_Odita_-_Untitled_%28Bronze_Figure%29_-_2013.jpg',
      product_price: '568',
    },
    {
      product_name: 'Bronze Figure',
      author_name: 'Amadou Sow',
      product_link:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Amadou_Sow_-_Untitled_%28Bronze_Figure%29_-_2012.jpg/1200px-Amadou_Sow_-_Untitled_%28Bronze_Figure%29_-_2012.jpg',
      product_price: 'Varies based on size and materials',
    },
  ];

  const africanPrintmakingCollection = [
    {
      product_name: 'Etching',
      author_name: 'El Anatsui',
      product_link:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/El_Anatsui_-_Untitled_%28Etching%29_-_2012.jpg/1200px-El_Anatsui_-_Untitled_%28Etching%29_-_2012.jpg',
      product_price: '456',
    },
    {
      product_name: 'Linocut',
      author_name: 'Tschabalala Self',
      product_link:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Tschabalala_Self_-_Untitled_%28Linocut%29_-_2019.jpg/1200px-Tschabalala_Self_-_Untitled_%28Linocut%29_-_2019.jpg',
      product_price: '678',
    },
    {
      product_name: 'Woodcut',
      author_name: 'William Kentridge',
      product_link:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/William_Kentridge_-_Untitled_%28Woodcut%29_-_1998.jpg/1200px-William_Kentridge_-_Untitled_%28Woodcut%29_-_1998.jpg',
      product_price: '098',
    },
    {
      product_name: 'Serigraph',
      author_name: 'Odili Donald Odita',
      product_link:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Odili_Donald_Odita_-_Untitled_%28Serigraph%29_-_2013.jpg/1200px-Odili_Donald_Odita_-_Untitled_%28Serigraph%29_-_2013.jpg',
      product_price: '234',
    },
    {
      product_name: 'Etching',
      author_name: 'Amadou Sow',
      product_link:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Amadou_Sow_-_Untitled_%28Etching%29_-_2012.jpg/1200px-Amadou_Sow_-_Untitled_%28Etching%29_-_2012.jpg',
      product_price: '5687',
    },
  ];

  const africanCeramicCollection = [
    {
      product_name: 'Pottery',
      author_name: 'El Anatsui',
      product_link:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/El_Anatsui_-_Untitled_%28Pottery%29_-_2012.jpg/1200px-El_Anatsui_-_Untitled_%28Pottery%29_-_2012.jpg',
      product_price: '123',
    },
    {
      product_name: 'Sculpture',
      author_name: 'Tschabalala Self',
      product_link:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Tschabalala_Self_-_Untitled_%28Sculpture%29_-_2019.jpg/1200px-Tschabalala_Self_-_Untitled_%28Sculpture%29_-_2019.jpg',
      product_price: '098',
    },
    {
      product_name: 'Vase',
      author_name: 'William Kentridge',
      product_link:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/William_Kentridge_-_Untitled_%28Vase%29_-_1998.jpg/1200px-William_Kentridge_-_Untitled_%28Vase%29_-_1998.jpg',
      product_price: '706',
    },
    {
      product_name: 'Bowl',
      author_name: 'Odili Donald Odita',
      product_link:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Odili_Donald_Odita_-_Untitled_%28Bowl%29_-_2013.jpg/1200px-Odili_Donald_Odita_-_Untitled_%28Bowl%29_-_2013.jpg',
      product_price: '6780',
    },
    {
      product_name: 'Jug',
      author_name: 'Amadou Sow',
      product_link:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Amadou_Sow_-_Untitled_%28Jug%29_-_2012.jpg/1200px-Amadou_Sow_-_Untitled_%28Jug%29_-_2012.jpg',
      product_price: '568',
    },
  ];

  return (
    <div className="ion-padding collections">
      <h2 style={{marginTop: '2.4rem'}}>Painting</h2>
      <ProductList arts={africanPaintingCollection} />
      <h2 style={{marginTop: '2.4rem'}}>Drawing</h2>
      <ProductList arts={africanDrawingCollection} />
      <h2 style={{marginTop: '2.4rem'}}>Sculptures</h2>
      <ProductList arts={africanSculptureCollection} />
      <h2 style={{marginTop: '2.4rem'}}>Printmaking</h2>
      <ProductList arts={africanPrintmakingCollection} />
      <h2 style={{marginTop: '2.4rem'}}>Textiles and Ceramics</h2>
      <ProductList arts={africanCeramicCollection} />
    </div>
  );
};

export default Collections;

// Painting
// Drawing
// sculpture
// printmaking
// textiles ceramics
// glassblowing
// photography
