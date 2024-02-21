import React from 'react';
import Header from './Header';
import Footer from './Footer';

function ContactPage() {
    return (
        <div>
            <Header />
            <main>
                <section>
                    <h2>Contact Us</h2>
                    <p>Follow us on Instagram and X at <a href="/">@cutandclickit</a></p>
                    <p>Subscribe to our email listing: <a href="mailto:cutandclick@example.com">cutandclick@example.com</a></p>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default ContactPage;