import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '../Container/Container';
import { Footer } from '../Footer/Footer';

export function AppBar() {
    return (
        <>
            <Container>
                <main>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet />
                    </Suspense>
                </main>
                <footer>
                    <Footer />
                </footer>
            </Container>
        </>
    );
}
