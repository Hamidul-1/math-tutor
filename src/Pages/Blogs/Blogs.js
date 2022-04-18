import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        // All blogs
        <div>
            <div>
                <h2 className='about-me-title text-center'>Blogs</h2>
                <div className='blog'>
                    <div className='blog-1'>
                        <h2>Difference between authorization and authentication</h2>
                        <p>
                            Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board.
                        </p>
                    </div><br />
                    <div className='blog-2'>
                        <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                        <p>
                            The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.<br />
                            Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints
                        </p>
                    </div><br/>
                    <div className='blog-3'>
                        <h2>What other services does firebase provide other than authentication?</h2>
                        <p>
                            1.Parse - Open Source Backend Platform <br/>
                            2.Back4app - Parse Hosting Platform <br/>
                            3.Kinvey - Mobile Backend as a Service (mBaaS) for the Enterprise <br/>
                            4.Backendless - Mobile Backend and API Services Platform <br/>
                            5.Kuzzle - Backend for web, hybrid, or native mobile apps and IoT 6.projects <br/>
                            6.Pubnub - Real-time APIs and Global Messaging <br/>
                            7.Kumulos - App Performance Management <br/>
                            8.Game Sparks - Game Backend Platform <br/>
                            9.Hoodie - Generic backend with a client API for Offline First applications<br/>
                            10.Appwrite - Open-Source backend for Flutter developers <br/>
                        </p>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default Blogs;