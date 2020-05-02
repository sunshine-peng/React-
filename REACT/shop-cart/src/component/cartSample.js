import React,{ Component} from 'react'
//函数组件用于显示购物面板
function Cart (props) {
    return (
        <table>
            <tbody>
               { props.data.map(d => (
                   <tr key={d.text}>
                       <td>{d.text}
                       <button onClick={() => props.subCount(d)}>-</button>
                       {d.count}
                       <button onClick={() => props.addCount(d)}>+</button>
                       </td>
                        <td>￥{d.price*d.count}</td>
                       </tr>
               ))}
            </tbody>
        </table>
    )
}

export default class CartSample extends Component{
    constructor(props){
        super(props)
        this.state = {
            text:'',//选择的商品名
            goods:[
                {id:1,text:'你不知道的javascript',price:66},
                {id:2,text:'你不知道的vue',price:66},
                {id:3,text:'你不知道的react',price:66}
            ],
            cart:[],
            history:[]
        }
        this.addGoods=this.addGoods.bind(this)
    }

    textChange (e){
        console.log(e.target.value)
        this.setState({
            text:e.target.value
        })
    }
//addGoods方法是用来实现输入框添加物品的功能、
    addGoods(){
        this.setState(preState => ({
            goods:[...this.state.goods,{id:preState.id,text:preState.text,price:preState.price}]
        }))
        console.log(this.state.preState)
    }
 //addCount方法是用来实现添加购买数量的功能
    addCount = item => {
        const newCart = [...this.state.cart]
        const idx = newCart.findIndex(c => c.text===item.text)
        newCart.splice(idx,1,{...item,count:item.count+1})
        this.setState({
            cart:newCart,
            history:[...this.state.history,newCart]
        })
    }
//subCount方法是用来实现消减购买数量的功能
    subCount = item => {
        const newCart = [...this.state.cart]
        const idx = newCart.findIndex(c => c.text===item.text)
        newCart.splice(idx,1,{...item,count:item.count - 1})
        this.setState({
            cart:newCart,
            history:[...this.state.history,newCart]
        })
    }
//addToCart方法是用来向购物车添加数据
    addToCart(good){
        const newCart = [...this.state.cart]
        const idx = newCart.findIndex(c => c.text===good.text)
        const item = newCart[idx]

        if(item){
            newCart.splice(idx,1,{...item, count: item.count + 1})
        }else{
            newCart.push({...good, count: 1})
        }
        this.setState({
            cart:newCart,
            history:[...this.state.history,newCart]
        })
    }
//go方法是用来实现历史记录功能
    go(his){
        this.setState({
            cart:his
        })
    }

    render(){
    const title=this.props.title?<h1>{this.props.title}</h1>:null
    const goods = this.state.goods.map(good => (
        <li key={good.id}>
           { good.text} 
           <button onClick={() => this.addToCart(good)}>加购</button>
        </li>
    ))
        return (
            <div>
                {title}
                <div>
                <input type='text' value={this.state.text} onChange={e => this.textChange(e)} />
                <button onClick={this.addGoods}>添加商品</button>
            </div>

            {/**列表渲染 */}
            <ul>
                {goods}
            </ul>
  
            {/**购物车列表 */}
            <Cart data={this.state.cart} addCount={this.addCount} subCount={this.subCount}></Cart>

            {/**传递函数用于子组件和父组件交互 */}
            {this.state.history.length>0?<h2>历史记录</h2>:null}
            {this.state.history.length>0?<button key='-1' onClick={() => this.setState({cart:[]})}>0</button>:null}
            {this.state.history.map((his, i) => (
                <button key={i} onClick={() => this.go(his)}>{i+1}</button>
            ))}
            </div>
            
        )
    }
}