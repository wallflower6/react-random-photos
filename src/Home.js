import React, {Component} from 'react';
import axios from 'axios';
import './Home.css';

class Home extends Component {

    state = {
        image:{}
    }

    componentDidMount() {
        axios.get("https://picsum.photos/v2/list?page=2&limit=100").then(res => {
            // console.log(res.data[Math.floor(Math.random() * 100)]);
            this.setState({
                image: res.data[Math.floor(Math.random() * 100)]
            })
        })
    }

    handleSubmit = () => {
        axios.get("https://picsum.photos/v2/list?page=2&limit=100").then(res => {
            // console.log(res.data[Math.floor(Math.random() * 100)]);
            this.setState({
                image: res.data[Math.floor(Math.random() * 100)]
            })
        })
    }

    render() {
        return (
            <div>
                <img src={this.state.image.download_url} id="center-image" />
                <button onClick={this.handleSubmit} id="get-button">Get Random Image</button>
            </div>
        )
    }
}

export default Home;