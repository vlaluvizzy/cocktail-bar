import { Navigate, Route, Routes } from 'react-router-dom';

import { MainLayout } from './layout/MainLayout';
import { CocktailPage } from './pages/Cocktail/Cocktail';
import { ROUTES } from './routes/routes';
import { ErrorPage } from './pages/Error/Error';
import { useCocktailsStore } from './store/useCocktailsStore';

import './App.css';

function App() {
    const { currentCocktailId } = useCocktailsStore();
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route
                    index
                    element={
                        <Navigate
                            to={`/cocktails/${currentCocktailId}`}
                            replace
                        />
                    }
                />
                <Route path={ROUTES.COCKTAIL.path} element={<CocktailPage />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}

export default App;
