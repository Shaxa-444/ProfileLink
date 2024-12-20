import React from 'react';
import { CIcon } from '@coreui/icons-react';
import { cibFacebookF, cibInstagram, cibLinkedinIn, cibTelegramPlane } from '@coreui/icons';
import { CButton, CCard, CCardBody, CCardHeader, CCardText, CCardTitle, CNav, CNavItem, CNavLink } from '@coreui/react';
import logo from '../assets/logo.jpg'
import { Image } from 'antd';
function Main() {

    return (
        <div>
            <CCard className="text-center" style= {{borderBottom:"none"}}>
                <CCardHeader>
                    <CNav  variant="pills" className="card-header-pills flex-nav" >
                        <CNavItem>
                            <CNavLink href="#" active>Главная страница</CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink href="#">Написать сообшения</CNavLink>
                        </CNavItem>
                        {/* <CNavItem>
                            <CNavLink href="#" disabled>Disabled</CNavLink>
                        </CNavItem> */}
                    </CNav>
                </CCardHeader>
                <CCardBody>
                    <Image src={logo} style={{ width: "100px", marginTop: "30px", marginBottom: "50px", borderRadius: "50%" }} />
                    <CCardTitle>Иброхим Садиев Ахмадович</CCardTitle>
                    <CCardText style={{ maxWidth: "400px", margin: "20px auto", textAlign: "left" }}>
                        <span className='responsive-text' style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>Дата рождения:</span>
                            <span>17 Февраль 1974</span>
                        </span>
                        <span className='responsive-text' style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>Почта:</span>
                            <span>Ibrokhim.sadiev@mail.ru</span>
                        </span>
                        <span className='responsive-text' style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>Телефон номер:</span>
                            <span style={{ display: "flex", flexDirection: "column" }}>
                                <span>+998 (94) 540-77-77</span>
                                <span>+998 (93) 656-88-88</span>
                            </span>
                        </span>
                    </CCardText>
                    <div style={{ display: "flex", flexDirection: "column", maxWidth: "500px", margin: "auto", gap: "10px" }}>
                        <CButton className='responsive-button' style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "5%" }} color="primary" href="https://t.me/+998945407777">
                            Telegram
                            <CIcon icon={cibTelegramPlane} size='xl' />
                        </CButton>
                        <CButton className='responsive-button' style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "5%" }} color="primary" href="#">
                            Facebook
                            <CIcon icon={cibFacebookF} size='xl' />
                        </CButton>

                        <CButton className='responsive-button' style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "5%" }} color="primary" href="#">
                            Instagram
                            <CIcon icon={cibInstagram} size='xl' />
                        </CButton>
                        <CButton className='responsive-button' style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "5%" }} color="primary" href="#">
                            Linkedin
                            <CIcon icon={cibLinkedinIn} size='xl' />
                        </CButton>
                    </div>
                </CCardBody>
            </CCard>
        </div>
    );
}

export default Main