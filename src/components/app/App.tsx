import {Outlet} from "react-router-dom";
import CustomHeader from "../header/CustomHeader";
import './App.css'
import {Flex} from "antd"

import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

function App() {
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Header><CustomHeader/></Header>
            <Content><Outlet /></Content>
            <Footer style={{color: 'rgba(255, 255, 255, 0.65)', background: '#9fa4af'}}>
                {new Date().getFullYear()}
            </Footer>
        </Layout>
    );
}

export default App;
