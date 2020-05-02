import React,{Component} from 'react'

export default class ComponentVs extends Component{
    constructor(props){
        super(props)

        this.state={
            comments:[]
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                comments:[
                    {title:'React真的很好用',author:'facebook'},
                    {title:'Vue也是很好用',author:'尤玉玺'}
                ]
            })
        },2000)
    }
    render(){
        return(
            <div>
                {this.state.comments.map(c => (
                    <Comment key={c.title} data={c}></Comment>
                ))}
            </div>
        )
    }
}

function Comment ({data}){
    return <div>
        <p>{data.title}</p>
        <p>---{data.author}</p>
    </div>
}