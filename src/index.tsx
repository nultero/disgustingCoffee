/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';
import { Router } from "solid-app-router";

import Dir from './dir'

render(
    () =>
    <Router base="/">
        <Dir />
    </Router>,
    document.getElementById('root') as HTMLElement
);
