import React, { lazy, Suspense } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner.component';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.page'));
const CreateIdentity = lazy(() => import('./pages/CreateIdentity/CreateIdentity.page'));
const Manual = lazy(() => import('./pages/Manual/Manual.page'));
const AdminPage = lazy(() => import('./pages/Admin/Admin.page'));

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
				<Route path="/manual" element={
					<Suspense fallback={LoadingSpinner()}>
						<Manual />
					</Suspense>
				} />
				<Route path="/admin" element={
					<Suspense fallback={LoadingSpinner()}>
						<AdminPage />
					</Suspense>
				} />
			</Routes>
		</Router>
	);
}

export default App;
