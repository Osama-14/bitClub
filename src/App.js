import React from 'react';
import { Routes, Route, link, Link } from 'react-router-dom';
import { layout, Typography, Space, Layout } from 'antd';
import { Navbar, Exchanges, Homepage, CryptoDetails, Cryptocurrencies, News } from './components';
import '../src/app.css'

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />

      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route  path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route  path="/exchanges" element={<Exchanges />} />
              <Route  path="/news" element={<News />} />
              <Route  path="/crypto/:coinId" element={<CryptoDetails />} />

            </Routes>
          </div>
        </Layout>

        <div className='footer'>
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            BitClub <br />
            All rights reserverd
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>

          </Space>
        </div>

      </div>
    </div>
  )
}

export default App