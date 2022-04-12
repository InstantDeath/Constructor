import image from './assets/img.png'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'
// --no-source-maps
const text = `Мій перший сайт на JavaScript`

export const model = [
    new TitleBlock ('Конструктор сайта на чистому JS', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new ImageBlock ( image, {
        styles:{
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Це картіночка'
    }),
    new ColumnsBlock ( [
        'Додаток на чистому JS, без бібліотек і фреймворків',
        'Надіюсь, хтось зацінить його'
    ],{
        styles: {
        background: 'linear-gradient(to bottom, $8e2de2, #4a00e0)',
        padding: '2rem',
        color: '#fff',
        'font-weight': 'bold'
        }
    }),
    new TextBlock ( text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c',
            padding: '1rem',
            'font-weight': 'bold'
        }
    })
]