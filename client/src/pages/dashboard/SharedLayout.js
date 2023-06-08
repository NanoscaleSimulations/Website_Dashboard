
import { Outlet } from 'react-router-dom';
import { Navbar, SmallSidebar, BigSidebar } from '../../components';
import Wrapper from '../../assets/wrappers/SharedLayout';
import { useAppContext } from '../../context/appContext';

const SharedLayout = () => {

    const { user } = useAppContext();
    return (
        <>
            <Wrapper>
                <div className='dashboard'>
                    <SmallSidebar />
                    <BigSidebar />
                    <div>
                        <Navbar />
                        <div className='dashboard-page'>
                            <h2 style={{ textAlign: 'center' }}>Welcome: <span style={{ color: 'deepskyblue' }}>{user?.name}</span></h2>
                            <hr></hr>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    );

};

export default SharedLayout;