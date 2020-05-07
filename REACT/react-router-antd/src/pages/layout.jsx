import React from 'react'
import {Layout, Row, Col, Avatar, Input, Menu, Dropdown, Table, Badge} from 'antd'
import {UserOutlined,SmileOutlined} from '@ant-design/icons'
import {Route, Link} from 'react-router-dom'

const {Header, Sider, Content, Footer} =Layout

function DropMenu () {
    return (
        <Menu>
            <Menu.Item key='0'>
                <a href="#">修改密码</a>
            </Menu.Item>
            <Menu.Item key='1'>
                <a href="#">退出登录</a>
            </Menu.Item>
        </Menu>
    )
}

class Table1 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           columns : [
                {
                  title: 'Name',
                  dataIndex: 'name',
                },
                {
                  title: 'Age',
                  dataIndex: 'age',
                },
                {
                  title: 'Address',
                  dataIndex: 'address',
                },
              ],
              
           data : []
              
        }
    }

    componentDidMount(){
        const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
this.setState({
    data:data
})
    }
    render(){
        return (
            <div>
                <Table columns={this.state.columns} dataSource={this.state.data}></Table>
            </div>
        )
    }
}

class PageLayout extends React.Component {
   render() {
       return (
           <Layout>
               <Header style={{color:'#fff',textAlign:'center',fontWeight:'bold'}}>
                   <Row>
                       <Col span={10}>React + Antd实践</Col>
                       <Col span={8}> 
                            <Input placeholder='请输入你要的...'/>
                       </Col>
                       <Col span={6}>
                           <Avatar style={{backgroundColor:'#666',marginRight:'20px'}} icon={<UserOutlined />}></Avatar>
                           <Dropdown overlay={DropMenu}><span>hi</span></Dropdown>
                       </Col>
                   </Row>
               </Header>
        
           <Layout style={{positon:'relative'}}>
               <Sider>
                   <Menu 
                   defaultSelectedKeys={['1']}
                 mode="inline"
                   style={{width:256,height:'90vh',overflow:'auto'}}>
                       <Menu.SubMenu key='sub1' title={<span><SmileOutlined />部分组件UI实践</span>}>
                            <Menu.Item key='sub1-1'><Link to={{pathname:"/test",search:'?id=1'}}/> Option1</Menu.Item>
                            <Menu.Item key='sub1-2'><Link to='/test1'/>Option2</Menu.Item>
                            </Menu.SubMenu>
                       <Menu.SubMenu key='sub2' title={<span><SmileOutlined />部分组件UI实践2</span>}>
                            <Menu.Item key='sub2-1'>Option1</Menu.Item>
                            <Menu.Item key='sub2-2'>Option2</Menu.Item>
                            </Menu.SubMenu>
                   </Menu>
               </Sider>
               <Content style={{marginLeft:'5%',backgroundColor:'#fff'}}>
                  <Route path='/test' component={Table1}></Route>
               </Content>
           {/* <Footer style={{width:'100%',boxSizing:'border-box',positon:'absolute' ,bottom:0}}>Footer</Footer> */}
               
           </Layout>
           </Layout>
       )
   }
}

export default PageLayout