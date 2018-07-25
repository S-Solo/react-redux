import React from 'react';
import Order from '../components/Order';

class Orders extends React.Component {
    state = {
        fruits: [
            { key: 1, name: 'Lemon', cost: 3 },
            { key: 2, name: 'Banana', cost: 4 },
            { key: 3, name: 'Mango', cost: 5 }
        ],
        totalPrice: 0
    }

    render() {
        const fruits = this.state.fruits.map(fruit => {
            return <Order key={fruit.key} name={fruit.name} />
        });

        return (
            <div>
                {fruits}
                <p>{this.state.totalPrice}</p>
            </div>
        )
    }
}
export default Orders;