/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';

import CoffeeMain from './Coffee';

render(() => <CoffeeMain />, document.getElementById('root') as HTMLElement);
