import React from 'react';
import {Recipes} from './Recipes'

export class App extends React.Component {
    render(){
        return (
        <div>
                <h1 className='text-center heading'>Recipe Box</h1>
                <Recipes />
        </div>
        );
    }
}