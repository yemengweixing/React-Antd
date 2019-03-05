import React from "react";
import {Card,Button,Radio} from "antd";
import './ui.less'

export default class Buttons extends React.Component {

    state={
        loading:true,
        size:"default"
    }

    handleChange=(e)=>{
        this.setState({
            size:e.target.value
        })
    }

    handleCloseLoading=()=>{
       this.setState({
            loading:false 
       }) ;
    }

    render() {
        return (
            <div style={{background:"#666"}}>
                <Card title="基础按钮" className='card-wrap'>
                    {/**1蓝色选中 2白色正常 等待点击    3虚心 功能未完善    4红色提示 警告  5黯淡 无法点击  */}
                    <Button type='primary'>Imooc</Button> 
                    <Button >Imooc</Button>
                    <Button type='dashed'>Imooc</Button>
                    <Button type='danger'>Imooc</Button>
                    <Button disabled>Imooc</Button>
                </Card>
                <Card title="图标按钮" className='card-wrap'>
                    {/**shape='circle' 圆形图标   */}
                    <Button icon='plus'>创建</Button> 
                    <Button icon='edit' >编辑</Button>
                    <Button icon='delete'>删除</Button>
                    <Button shape='circle' icon='search'></Button>
                    <Button type='primary' icon='search'>搜索</Button>
                    <Button type='primary' icon='download'>下载</Button>
                </Card>
                <Card title="Loading按钮" className='card-wrap'>                    
                    <Button type='primary' loading={this.state.loading}>确定</Button>
                    <Button shape='circle' type='primary' loading={this.state.loading}></Button>
                    <Button loading={this.state.loading}>点击加载</Button>
                    <Button shape='circle' loading={this.state.loading}></Button>
                    <Button type='primary' onClick={this.handleCloseLoading}>关闭</Button>
                </Card>
                <Card title='按钮组'>
                    <Button.Group>
                        <Button type='primary' icon='left' >返回</Button>
                        <Button type='primary' icon='right'>前进</Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸" className='card-wrap'>
                    <Radio.Group value={this.state.size} onChange={this.handleChange}>
                        <Radio value='small'>小</Radio>
                        <Radio value='default'>中</Radio>
                        <Radio value='large'>大</Radio>
                    </Radio.Group>
                    {/**1蓝色选中 2白色正常 等待点击    3虚心 功能未完善    4红色提示 警告  5黯淡 无法点击  */}
                    <Button type='primary' size={this.state.size}>Imooc</Button>
                    <Button size={this.state.size}>Imooc</Button>
                    <Button type='dashed' size={this.state.size}>Imooc</Button>
                    <Button type='danger' size={this.state.size}>Imooc</Button>
                    
                </Card>
            </div>
        );
    }
}
