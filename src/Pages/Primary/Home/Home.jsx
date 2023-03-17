import styled from 'styled-components';

/* Components ---------------------------*/
import Inset from '@/Common/PagesLayout/Inset';
import Slideshow from './Slideshow/Slideshow';
import Tabbed from './Tabbed/Tabbed';

const Home = () => {
    return (
        <HomeStyled className='Home'>
            <h1>Home</h1>
            <h2>Changes: 2023.03.17-10.18.48</h2>
            <Slideshow />
            <Inset>
                <Tabbed />
            </Inset>
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`

    h1 {
        display: none;
    }

`;