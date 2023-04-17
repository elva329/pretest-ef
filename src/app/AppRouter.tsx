import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Content } from './layout';

export default function AppRouter() {
  const LoadingMessage = () => <div>Loading..,</div>;

  return (
    <BrowserRouter>
      <Content />

      <Suspense fallback={<LoadingMessage />}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/example" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
