
import { Outlet } from 'react-router-dom';
import { Navbar, SmallSidebar, BigSidebar } from '../../components';
import Wrapper from '../../assets/wrappers/SharedLayout';
import { useAppContext } from '../../context/appContext';

const SharedLayout = () => {

    const { user } = useAppContext();
    return (
        <>
        <Wrapper>
            <main className='dashboard'>
                <SmallSidebar />
                <BigSidebar />
                <div>
                    <Navbar />
                    <div className='dashboard-page'>
                    <h2 style={{textAlign:'center'}}>Welcome dear: <span style={{display:'block', color: 'deepskyblue'}}>{user?.name} {user?.lastName}</span></h2>
                    <Outlet />
                    </div>
                </div>
            </main>
        </Wrapper>
        </>
    );

};

export default SharedLayout;