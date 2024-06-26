import { Authenticated, Refine } from '@refinedev/core';
import { DevtoolsPanel, DevtoolsProvider } from '@refinedev/devtools';
import { RefineKbar, RefineKbarProvider } from '@refinedev/kbar';

import { useNotificationProvider } from '@refinedev/antd';
import '@refinedev/antd/dist/reset.css';

import { dataProvider, liveProvider, authProvider } from './providers';
import { Home, ForgotPassword, Login, Register } from './pages';

import routerBindings, {
    CatchAllNavigate,
    DocumentTitleHandler,
    UnsavedChangesNotifier,
} from '@refinedev/react-router-v6';
import { App as AntdApp } from 'antd';
import Layout from './components/layout';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { resources } from './config/resources';

function App() {
    return (
        <BrowserRouter>
            <RefineKbarProvider>
                <AntdApp>
                    <DevtoolsProvider>
                        <Refine
                            dataProvider={dataProvider}
                            liveProvider={liveProvider}
                            notificationProvider={useNotificationProvider}
                            routerProvider={routerBindings}
                            authProvider={authProvider}
                            resources={resources}
                            options={{
                                syncWithLocation: true,
                                warnWhenUnsavedChanges: true,
                                useNewQueryKeys: true,
                                projectId: 'qFLTBM-fvyBm2-1RaXV8',
                                liveMode: 'auto',
                            }}
                        >
                            <Routes>
                                <Route
                                    path="/register"
                                    index
                                    element={<Register />}
                                />
                                <Route
                                    path="/login"
                                    index
                                    element={<Login />}
                                />
                                <Route
                                    path="/forgot-password"
                                    index
                                    element={<ForgotPassword />}
                                />
                                <Route
                                    element={
                                        <Authenticated
                                            key="authenticated-layout"
                                            fallback={
                                                <CatchAllNavigate to="/login" />
                                            }
                                        >
                                            <Layout>
                                                <Outlet />
                                            </Layout>
                                        </Authenticated>
                                    }
                                >
                                    <Route index element={<Home />} />
                                </Route>
                            </Routes>
                            <RefineKbar />
                            <UnsavedChangesNotifier />
                            <DocumentTitleHandler />
                        </Refine>
                        <DevtoolsPanel />
                    </DevtoolsProvider>
                </AntdApp>
            </RefineKbarProvider>
        </BrowserRouter>
    );
}

export default App;
