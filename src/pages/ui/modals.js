import React from "react";
import { Card, Button, Radio ,Modal} from "antd";
import './ui.less'

export default class Modals extends React.Component {
    state={
        showModal1:false,
        showModal2: false,
        showModal3: false,
        showModal4: false

    }
    handleOpen=(type)=>{
        this.setState({
            showModall:true
        })

    }

render(){
    return(
        <div>
            <Card title="基礎模態" className="card-w">
                <Button type="primary" onClick={() => this.handleOpen("showModal1")}>Open</Button>
                <Button type="primary" onClick={() => this.handleOpen("showModal2")}>自定义页脚</Button>
                <Button type="primary" onClick={() => this.handleOpen("showModal3")}>顶部20px</Button>
                <Button type="primary" onClick={() => this.handleOpen("showModal4")}>水平垂直居中</Button>

                <Modal
                    title='React'   visible={this.state.showModal1}  onCancel={()=>{}}
                >
                <p>欢迎</p>
                </Modal>
            </Card>
        </div>
    );
}









}