import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../shared/footer';
import Header from '../shared/header';
import Sidebar from '../shared/sidebar';
import Skeleton from '../shared/skeleton';

const MainLayout = () => {
  return (
    <React.Suspense fallback={<Skeleton isLoaded={false} />}>
      <div className="relative h-screen overflow-hidden md:grid md:grid-cols-[max-content_auto]">
        <Sidebar />
        <div className="flex h-screen flex-col">
          <Header />
          <div className="h-full flex-1 overflow-hidden p-6">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </React.Suspense>
  );
};

export default MainLayout;
