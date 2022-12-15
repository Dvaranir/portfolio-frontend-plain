import { resolve } from 'path'

const pages = [
    {name: 'main', path: resolve(__dirname, './index.html')},
    {name: 'about-me', path: resolve(__dirname, './pages/about-me/about-me.html')},
];

export default pages