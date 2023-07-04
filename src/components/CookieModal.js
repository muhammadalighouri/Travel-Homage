import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import '../scss/CookieModal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';
const cookies = new Cookies();

const CookieModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [settingsModalOpen, setSettingsModalOpen] = useState(false);
    const [cookieSettings, setCookieSettings] = useState({
        customAdvertisements: true,
        geographicalLocationAdvertisement: true,
        sharingOfSocialMedia: true,
        functionality: true,
        analytics: true
    });
    useEffect(() => {
        const checkCookie = cookies.get('userAcceptedCookies');
        if (!checkCookie) {
            setShowModal(true);
        }
    }, []);

    const acceptCookies = () => {
        cookies.set('userAcceptedCookies', true, { path: '/' });
        // قم بتعيين ملفات تعريف الارتباط الأخرى حسب الحاجة
        cookies.set('customAdvertisements', cookieSettings.customAdvertisements, { path: '/' });
        cookies.set(
            'geographicalLocationAdvertisement',
            cookieSettings.geographicalLocationAdvertisement,
            { path: '/' }
        );
        cookies.set('sharingOfSocialMedia', cookieSettings.sharingOfSocialMedia, { path: '/' });
        cookies.set('functionality', cookieSettings.functionality, { path: '/' });
        cookies.set('analytics', cookieSettings.analytics, { path: '/' });
        setShowModal(false);
    };

    const openSettingsModal = () => {
        setSettingsModalOpen(true);
    };

    const confirmSettings = () => {
        acceptCookies();
        setSettingsModalOpen(false);
    };
    const closeSettingsModal = () => {
        setSettingsModalOpen(false);
    };

    const handleCookieSettingsChange = (settingName) => {
        setCookieSettings((prevSettings) => ({
            ...prevSettings,
            [settingName]: !prevSettings[settingName]
        }));
    };

    return (
        <>
            {showModal && (
                <div className="cookie-modal">
                    <h2>موافقة ملفات تعريف الارتباط</h2>
                    <p style={{ width: '70%', margin: '0 auto 20px' }}>
                        نحن نستخدم ملفات تعريف الارتباط لتحسين تجربتك. باستمرار زيارتك لهذا الموقع, فإنك توافق على استخدامنا لملفات تعريف الارتباط.
                    </p>
                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>

                        <button onClick={acceptCookies}>قبول ملفات تعريف الارتباط</button>
                        <button style={{ marginLeft: '10px' }} onClick={openSettingsModal}>
                            الإعدادات
                        </button>
                        <button style={{ marginLeft: '10px' }} onClick={() => setShowModal(false)}>
                            إلغاء
                        </button>
                    </div >
                </div >
            )}

            {
                settingsModalOpen && (
                    <Modal
                        show={true}
                        onHide={closeSettingsModal}
                        className="settings-modal"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>إعدادات ملفات تعريف الارتباط</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Check
                                    type="checkbox"
                                    id="customAdvertisements"
                                    label="الإعلانات المخصصة"
                                    checked={cookieSettings.customAdvertisements}
                                    onChange={() => handleCookieSettingsChange('customAdvertisements')}
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="geographicalLocationAdvertisement"
                                    label="الإعلانات المستندة إلى الموقع الجغرافي"
                                    checked={cookieSettings.geographicalLocationAdvertisement}
                                    onChange={() =>
                                        handleCookieSettingsChange(
                                            'geographicalLocationAdvertisement'
                                        )
                                    }
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="sharingOfSocialMedia"
                                    label="المشاركة عبر وسائل التواصل الاجتماعي"
                                    checked={cookieSettings.sharingOfSocialMedia}
                                    onChange={() => handleCookieSettingsChange('sharingOfSocialMedia')}
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="functionality"
                                    label="الوظائف"
                                    checked={cookieSettings.functionality}
                                    onChange={() => handleCookieSettingsChange('functionality')}
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="analytics"
                                    label="التحليلات"
                                    checked={cookieSettings.analytics}
                                    onChange={() => handleCookieSettingsChange('analytics')}
                                />
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="warning" onClick={confirmSettings}>
                                تأكيد
                            </Button>
                        </Modal.Footer>
                    </Modal>
                )
            }
        </>
    );

};

export default CookieModal;