import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const container = document.querySelector('#root')!;
const root = createRoot(container);

root.render(
    <StrictMode>
        <div>works</div>
    </StrictMode>
);