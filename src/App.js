import React, { lazy, Suspense } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner.component';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.page'));
const CreateIdentity = lazy(() => import('./pages/CreateIdentity/CreateIdentity.page'));

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={
					<Suspense fallback={LoadingSpinner()}>
						<HomePage />
					</Suspense>
				} />
				<Route path="/create-identity" element={
					<Suspense fallback={LoadingSpinner()}>
						<CreateIdentity />
					</Suspense>
				} />
			</Routes>
		</Router>
	);
}

export default App;
