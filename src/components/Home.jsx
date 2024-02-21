import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SurveyForm from './SurveyForm';

function HomePage() {
    return (
        <div>
            <Header />
            <main>
                <section>
                    <p>Explore the latest hair products and styles! orem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui libero, blandit sed dictum in, ultrices non elit. 
                    In mattis laoreet sem, eget sollicitudin est pharetra nec. Proin vitae purus massa. 
                    Maecenas a orci ut ex mollis fermentum. Nunc tellus lorem, tempus eu rhoncus id, viverra non justo. 
                    Praesent sed turpis tempor, mollis leo non, faucibus nibh. Sed bibendum ac nisi vel porttitor. 
                    Mauris feugiat id sem in bibend</p>

                    <br />

                    <p>Explore the latest hair products and styles! orem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui libero, blandit sed dictum in, ultrices non elit. 
                    In mattis laoreet sem, eget sollicitudin est pharetra nec. Proin vitae purus massa. 
                    Maecenas a orci ut ex mollis fermentum. Nunc tellus lorem, tempus eu rhoncus id, viverra non justo. 
                    Praesent sed turpis tempor, mollis leo non, faucibus nibh. Sed bibendum ac nisi vel porttitor. 
                    Mauris feugiat id sem in bibend</p>

                    <br />

                    <SurveyForm />

                </section>
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;