import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Hero>
                    <Banner
                        title="Best Products"
                        subtitle="Only $1"
                    >
                        <Link to="/products" className="btn-primary">
                            Our Products
                        </Link>
                    </Banner>
                </Hero>
            </div>
        )
    }
}
