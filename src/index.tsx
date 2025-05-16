import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { Index } from './components/app';
import { Provider } from 'react-redux';
import { store } from './services/store';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);
root.render(
	<StrictMode>
		<Provider store={store}>
			<Index />
		</Provider>
	</StrictMode>
);
