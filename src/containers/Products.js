import React from 'react';

import Product from '../components/Product';
import { connect } from 'react-redux';

class Products extends React.Component {
    render() {
        const fruits = this.props.fruits.map(fruit => {
            return <Product
                key={fruit.key}
                name={fruit.name}
                cost={fruit.cost} />
        })
        return (
            <div>
                {fruits}
                <p>{this.props.totalPrice} $</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fruits: state.fruits,
        totalPrice: state.totalPrice
    }
}

export default connect(mapStateToProps)(Products);