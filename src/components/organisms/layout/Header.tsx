import styled from 'styled-components';
import { Link } from 'react-router-dom';

export function Header() {

    return (
        <HeaderContainer>
            <HeaderMenu>햄버거 메뉴 아이콘</HeaderMenu>
            <HeaderMenu>로고</HeaderMenu>
            <HeaderMenu><Link to='/login'>로그인</Link></HeaderMenu>
            <HeaderMenu>회원가입</HeaderMenu>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100vw;
    height: 5vh;
    background-color: black;
    color: white;
`

const HeaderMenu = styled.div`
    
`